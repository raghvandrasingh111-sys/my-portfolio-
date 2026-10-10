"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";

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
  const [contributions, setContributions] = useState<ContributionDay[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const year = new Date().getFullYear();

    async function loadContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/raghvandrasingh111-sys?y=${year}`,
          { signal: controller.signal, cache: "default" },
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

  const year = new Date().getFullYear();
  const firstDay = useMemo(() => new Date(Date.UTC(year, 0, 1)), [year]);
  const firstWeekday = useMemo(() => firstDay.getUTCDay(), [firstDay]);
  const today = useMemo(() => getLocalDate(new Date()), []);

  const { weeks, months, contributionTotal } = useMemo(() => {
    if (!contributions) {
      return { weeks: [], months: [], contributionTotal: 0 };
    }

    const weekCount = Math.ceil((firstWeekday + contributions.length) / 7) || 1;
    const computedWeeks: ContributionWeek[] = Array.from({ length: weekCount }, () => ({
      days: Array(7).fill(null),
    }));

    for (const contribution of contributions) {
      const date = new Date(`${contribution.date}T00:00:00Z`);
      const daysSinceYearStart = Math.round(
        (date.getTime() - firstDay.getTime()) / 86_400_000,
      );
      const position = firstWeekday + daysSinceYearStart;
      computedWeeks[Math.floor(position / 7)].days[position % 7] = contribution;
    }

    const computedMonths = Array.from({ length: 12 }, (_, month) => {
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

    const total = contributions.reduce((sum, day) => sum + day.count, 0);

    return {
      weeks: computedWeeks,
      months: computedMonths,
      contributionTotal: total,
    };
  }, [contributions, firstDay, firstWeekday, today, year]);

  const CELL_SIZE = 11;
  const GAP = 3;
  const STEP = CELL_SIZE + GAP;
  const RADIUS = 3;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !weeks.length) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 2 : 2;
    const width = weeks.length * STEP - GAP;
    const height = 7 * STEP - GAP;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    weeks.forEach((week, wIdx) => {
      week.days.forEach((day, dIdx) => {
        const x = wIdx * STEP;
        const y = dIdx * STEP;

        if (day) {
          ctx.fillStyle = levelColors[Math.min(day.level, levelColors.length - 1)];
          ctx.beginPath();
          if (typeof ctx.roundRect === "function") {
            ctx.roundRect(x, y, CELL_SIZE, CELL_SIZE, RADIUS);
          } else {
            ctx.rect(x, y, CELL_SIZE, CELL_SIZE);
          }
          ctx.fill();

          // Subtle border
          ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });
  }, [weeks, STEP]);

  const handlePointer = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const wIdx = Math.floor(x / STEP);
      const dIdx = Math.floor(y / STEP);

      if (
        wIdx >= 0 &&
        wIdx < weeks.length &&
        dIdx >= 0 &&
        dIdx < 7 &&
        weeks[wIdx]?.days[dIdx]
      ) {
        const day = weeks[wIdx].days[dIdx];
        if (day) {
          setTooltip({
            x: Math.min(x, rect.width - 130),
            y: Math.max(0, y - 10),
            text: `${day.date}: ${day.count} ${day.count === 1 ? "contribution" : "contributions"}`,
          });
          return;
        }
      }
      setTooltip(null);
    },
    [weeks, STEP],
  );

  const handlePointerLeave = useCallback(() => {
    setTooltip(null);
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

  return (
    <div>
      <div
        className="overflow-x-auto pb-2"
        aria-label={`Contributions from January ${year} through today`}
      >
        <div className="w-max min-w-full">
          {/* Months Header */}
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

          <div className="flex gap-2 relative">
            {/* Weekday Labels */}
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

            {/* Canvas heatmap (Replaces 365+ DOM elements with 1 high-performance canvas) */}
            <div className="relative">
              <canvas
                ref={canvasRef}
                role="img"
                aria-label={`Daily GitHub contributions from January 1, ${year} through ${today}: ${contributionTotal} total contributions`}
                onPointerMove={handlePointer}
                onPointerLeave={handlePointerLeave}
                className="cursor-pointer block"
              />

              {tooltip && (
                <div
                  className="pointer-events-none absolute z-20 px-2.5 py-1 text-[11px] font-mono bg-surface border border-glass-border text-text-primary rounded-md shadow-xl whitespace-nowrap transform -translate-y-full"
                  style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
                >
                  {tooltip.text}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
        <span>
          {contributionTotal} contributions · Jan {year} –{" "}
          {monthFormatter.format(new Date())} {year}
        </span>
        <span
          className="inline-flex items-center gap-1.5"
          aria-label="Contribution intensity legend"
        >
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
