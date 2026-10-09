"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionResponse {
  contributions: ContributionDay[];
}

interface ContributionWeek {
  days: (ContributionDay | null)[];
}

const levelColors = ["#1f2937", "#155e75", "#0891b2", "#22d3ee", "#a5f3fc"];
const weekdayLabels = ["Sun", "", "Tue", "", "Thu", "", "Sat"];
const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });

function isContributionResponse(value: unknown): value is ContributionResponse {
  if (!value || typeof value !== "object" || !("contributions" in value)) {
    return false;
  }

  return (
    Array.isArray(value.contributions) &&
    value.contributions.every(
      (day) =>
        day &&
        typeof day.date === "string" &&
        typeof day.count === "number" &&
        typeof day.level === "number",
    )
  );
}

function getLocalDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function ContributionGraph() {
  const [contributions, setContributions] = useState<ContributionDay[] | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const year = new Date().getFullYear();

    async function loadContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/raghvandrasingh111-sys?y=${year}`,
          { signal: controller.signal, cache: "no-store" },
        );

        if (!response.ok) {
          throw new Error(`GitHub activity request failed (${response.status}).`);
        }

        const payload: unknown = await response.json();
        if (!isContributionResponse(payload)) {
          throw new Error("GitHub activity returned an unexpected response.");
        }

        const today = getLocalDate(new Date());
        const yearStart = `${year}-01-01`;
        setContributions(
          payload.contributions.filter(
            (day) => day.date >= yearStart && day.date <= today,
          ),
        );
      } catch (cause) {
        if (cause instanceof Error && cause.name === "AbortError") return;
        setError(
          cause instanceof Error
            ? cause.message
            : "Unable to load GitHub contribution activity.",
        );
      }
    }

    void loadContributions();
    return () => controller.abort();
  }, []);

  if (error) {
    return (
      <p role="alert" className="text-sm text-text-secondary">
        {error}{" "}
        <a
          href="https://github.com/raghvandrasingh111-sys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-cyan hover:text-accent-primary transition-colors"
        >
          View activity on GitHub.
        </a>
      </p>
    );
  }

  if (!contributions) {
    return (
      <p className="text-sm text-text-secondary" role="status">
        Loading GitHub contributions…
      </p>
    );
  }

  const year = new Date().getFullYear();
  const firstDay = new Date(Date.UTC(year, 0, 1));
  const firstWeekday = firstDay.getUTCDay();
  const today = getLocalDate(new Date());
  const weekCount =
    Math.ceil((firstWeekday + contributions.length) / 7) || 1;
  const weeks: ContributionWeek[] = Array.from({ length: weekCount }, () => ({
    days: Array(7).fill(null),
  }));

  for (const contribution of contributions) {
    const date = new Date(`${contribution.date}T00:00:00Z`);
    const daysSinceYearStart = Math.round(
      (date.getTime() - firstDay.getTime()) / 86_400_000,
    );
    const position = firstWeekday + daysSinceYearStart;
    weeks[Math.floor(position / 7)].days[position % 7] = contribution;
  }

  const months = Array.from({ length: 12 }, (_, month) => {
    const date = new Date(Date.UTC(year, month, 1));
    const dayOfYear = Math.floor(
      (date.getTime() - firstDay.getTime()) / 86_400_000,
    );

    return {
      label: monthFormatter.format(date),
      week: Math.floor((firstWeekday + dayOfYear) / 7),
      date: getLocalDate(new Date(year, month, 1)),
    };
  }).filter((month) => month.date <= today);

  const contributionTotal = contributions.reduce(
    (total, day) => total + day.count,
    0,
  );

  return (
    <div>
      <div className="overflow-x-auto pb-2" aria-label={`Contributions from January ${year} through today`}>
        <div className="w-max min-w-full">
          <div
            aria-hidden="true"
            className="grid h-5 text-[11px] text-text-muted"
            style={{
              gridTemplateColumns: `repeat(${weeks.length}, 11px)`,
              columnGap: "3px",
            }}
          >
            {months.map((month) => (
              <span
                key={month.label}
                style={{ gridColumnStart: month.week + 1 }}
              >
                {month.label}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <div
              aria-hidden="true"
              className="grid shrink-0 grid-rows-7 gap-[3px] text-[10px] leading-[11px] text-text-muted"
            >
              {weekdayLabels.map((label, index) => (
                <span key={index} className="h-[11px]">
                  {label}
                </span>
              ))}
            </div>

            <div
              role="grid"
              aria-label={`Daily GitHub contributions from January 1, ${year} through ${today}`}
              className="grid grid-rows-7 gap-[3px]"
              style={{ gridAutoFlow: "column", gridAutoColumns: "11px" }}
            >
              {weeks.flatMap((week, weekIndex) =>
                week.days.map((day, weekdayIndex) => (
                  <span
                    key={`${weekIndex}-${weekdayIndex}`}
                    role="gridcell"
                    aria-label={
                      day
                        ? `${day.date}: ${day.count} contributions`
                        : "Before January 1"
                    }
                    title={
                      day
                        ? `${day.date}: ${day.count} contributions`
                        : undefined
                    }
                    className="h-[11px] w-[11px] rounded-[3px] ring-1 ring-inset ring-white/5"
                    style={{
                      backgroundColor: day
                        ? levelColors[Math.min(day.level, levelColors.length - 1)]
                        : "transparent",
                    }}
                  />
                )),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
        <span>
          {contributionTotal} contributions · Jan {year} – {monthFormatter.format(new Date())} {year}
        </span>
        <span className="inline-flex items-center gap-1.5" aria-label="Contribution intensity legend">
          Less
          {levelColors.map((color) => (
            <span
              key={color}
              className="h-[11px] w-[11px] rounded-[3px]"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
          ))}
          More
        </span>
      </div>
    </div>
  );
}
