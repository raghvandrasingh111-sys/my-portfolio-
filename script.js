const header = document.querySelector(".site-header");
const progressBar = document.querySelector("#scroll-progress");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateScrollUI() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  progressBar.style.transform = `scaleX(${progress})`;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", updateScrollUI);
updateScrollUI();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
});

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
}

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".primary-navigation a").forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}

const tagline = document.querySelector("#typed-tagline");
const roles = ["Full-stack developer & AI builder", "Co-founder & CTO at inheriq.in", "Turning ideas into useful products"];
if (!reducedMotion) {
  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let deleting = false;

  function typeRole() {
    const role = roles[roleIndex];
    characterIndex += deleting ? -1 : 1;
    tagline.textContent = role.slice(0, characterIndex);

    let nextDelay = deleting ? 28 : 48;
    if (!deleting && characterIndex === role.length) {
      deleting = true;
      nextDelay = 1800;
    } else if (deleting && characterIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      nextDelay = 350;
    }
    window.setTimeout(typeRole, nextDelay);
  }
  window.setTimeout(typeRole, 2400);
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim();
  const message = String(formData.get("message")).trim();
  if (!name || !email || !message) {
    formStatus.textContent = "Please complete each field before continuing.";
    formStatus.classList.add("is-error");
    return;
  }

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  formStatus.classList.remove("is-error");
  formStatus.textContent = "Opening your email app with your message ready to send.";
  window.location.href = `mailto:raghvandrasingh111@gmail.com?subject=${subject}&body=${body}`;
});

const canvas = document.querySelector("#hero-canvas");
const context = canvas.getContext("2d");
const heroContent = document.querySelector(".hero-content");
let particles = [];
let globeVertices = [];
let canvasWidth = 0;
let canvasHeight = 0;
let animationFrame = 0;
let pointer = { x: -1000, y: -1000 };
let canvasVisible = true;

function resizeCanvas() {
  const bounds = canvas.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = bounds.width;
  canvasHeight = bounds.height;
  canvas.width = Math.round(canvasWidth * pixelRatio);
  canvas.height = Math.round(canvasHeight * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  const particleCount = Math.min(64, Math.max(30, Math.round(canvasWidth / 22)));
  particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    radius: Math.random() * 1.4 + .45,
    speed: Math.random() * .23 + .06,
    phase: Math.random() * Math.PI * 2,
  }));

  const latitudeCount = 11;
  const longitudeCount = 22;
  globeVertices = [];
  for (let latitude = 0; latitude <= latitudeCount; latitude += 1) {
    const polar = Math.PI * latitude / latitudeCount;
    for (let longitude = 0; longitude < longitudeCount; longitude += 1) {
      const azimuth = Math.PI * 2 * longitude / longitudeCount;
      globeVertices.push({
        x: Math.sin(polar) * Math.cos(azimuth),
        y: Math.cos(polar),
        z: Math.sin(polar) * Math.sin(azimuth),
        latitude,
        longitude,
      });
    }
  }
}

function drawScene(time = 0) {
  if (!canvasVisible || document.hidden) {
    animationFrame = 0;
    return;
  }
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  const timeSeconds = reducedMotion ? 0 : time * .00012;
  const centerX = canvasWidth * .5;
  const centerY = canvasHeight * .46;
  const radius = Math.min(176, Math.max(112, canvasWidth * .14));
  const hasPointer = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= canvasWidth && pointer.y <= canvasHeight;
  const pointerX = hasPointer ? (pointer.x - centerX) / canvasWidth : 0;
  const pointerY = hasPointer ? (pointer.y - centerY) / canvasHeight : 0;
  const rotateY = timeSeconds + pointerX * .45;
  const rotateX = -.22 + Math.sin(timeSeconds * .7) * .08 - pointerY * .35;
  const sinX = Math.sin(rotateX);
  const cosX = Math.cos(rotateX);
  const sinY = Math.sin(rotateY);
  const cosY = Math.cos(rotateY);
  const focalLength = radius * 4.8;
  const project = (vertex) => {
    const turnedX = vertex.x * cosY + vertex.z * sinY;
    const turnedZ = -vertex.x * sinY + vertex.z * cosY;
    const turnedY = vertex.y * cosX - turnedZ * sinX;
    const depth = vertex.y * sinX + turnedZ * cosX;
    const perspective = focalLength / (focalLength + depth * radius);
    return {
      x: centerX + turnedX * radius * perspective,
      y: centerY + turnedY * radius * perspective,
      depth,
    };
  };
  const projected = globeVertices.map(project);

  const glow = context.createRadialGradient(centerX, centerY, radius * .08, centerX, centerY, radius * 1.55);
  glow.addColorStop(0, "rgba(63, 229, 211, 0.13)");
  glow.addColorStop(.48, "rgba(68, 143, 221, 0.055)");
  glow.addColorStop(1, "rgba(98, 91, 209, 0)");
  context.beginPath();
  context.arc(centerX, centerY, radius * 1.55, 0, Math.PI * 2);
  context.fillStyle = glow;
  context.fill();

  const drawGlobeEdge = (start, end) => {
    const frontness = Math.max(0, (start.depth + end.depth + 2) / 4);
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.strokeStyle = `rgba(115, 235, 224, ${.07 + frontness * .3})`;
    context.lineWidth = .55 + frontness * .45;
    context.stroke();
  };

  for (const vertex of globeVertices) {
    const index = vertex.latitude * 22 + vertex.longitude;
    const nextLongitude = vertex.latitude * 22 + (vertex.longitude + 1) % 22;
    drawGlobeEdge(projected[index], projected[nextLongitude]);
    if (vertex.latitude < 11) {
      drawGlobeEdge(projected[index], projected[index + 22]);
    }
  }

  for (let ring = 0; ring < 3; ring += 1) {
    const ringTilt = (ring - 1) * .72;
    const ringTurn = timeSeconds * (ring % 2 === 0 ? -.55 : .38) + ring * 1.05;
    const points = [];
    for (let step = 0; step <= 120; step += 1) {
      const angle = Math.PI * 2 * step / 120;
      const orbitX = Math.cos(angle) * 1.31;
      const orbitY = Math.sin(angle) * Math.sin(ringTilt) * 1.31;
      const orbitZ = Math.sin(angle) * Math.cos(ringTilt) * 1.31;
      const turnedX = orbitX * Math.cos(ringTurn) + orbitZ * Math.sin(ringTurn);
      const turnedZ = -orbitX * Math.sin(ringTurn) + orbitZ * Math.cos(ringTurn);
      const y = orbitY * cosX - turnedZ * sinX;
      const depth = orbitY * sinX + turnedZ * cosX;
      const perspective = focalLength / (focalLength + depth * radius);
      points.push({
        x: centerX + turnedX * radius * perspective,
        y: centerY + y * radius * perspective,
        depth,
      });
    }
    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.strokeStyle = ring === 1 ? "rgba(169, 154, 255, 0.17)" : "rgba(107, 205, 234, 0.13)";
    context.lineWidth = ring === 1 ? 1 : .75;
    context.stroke();

    const satelliteIndex = Math.floor(timeSeconds * 30 * (ring % 2 === 0 ? 1 : -1)) + ring * 38;
    const satellite = points[(satelliteIndex % 120 + 120) % 120];
    context.beginPath();
    context.arc(satellite.x, satellite.y, ring === 1 ? 2.4 : 1.7, 0, Math.PI * 2);
    context.fillStyle = ring === 1 ? "#c6a8ff" : "#84fff0";
    context.shadowColor = context.fillStyle;
    context.shadowBlur = 13;
    context.fill();
    context.shadowBlur = 0;
  }

  const stars = particles.map((particle) => ({
    x: particle.x + Math.sin(timeSeconds + particle.phase) * 10,
    y: (particle.y + timeSeconds * particle.speed * 90) % canvasHeight + Math.cos(timeSeconds * .8 + particle.phase) * 9,
    radius: particle.radius,
    phase: particle.phase,
  }));
  for (let index = 0; index < stars.length; index += 1) {
    const star = stars[index];
    const twinkle = .35 + (Math.sin(timeSeconds * 3 + star.phase) + 1) * .2;
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(126, 238, 226, ${twinkle})`;
    context.fill();

    for (let neighborIndex = index + 1; neighborIndex < stars.length; neighborIndex += 1) {
      const neighbor = stars[neighborIndex];
      const distance = Math.hypot(star.x - neighbor.x, star.y - neighbor.y);
      if (distance < 105) {
        context.beginPath();
        context.moveTo(star.x, star.y);
        context.lineTo(neighbor.x, neighbor.y);
        context.strokeStyle = `rgba(112, 201, 216, ${(1 - distance / 105) * .14})`;
        context.lineWidth = .65;
        context.stroke();
      }
    }

    const distanceToPointer = Math.hypot(star.x - pointer.x, star.y - pointer.y);
    if (hasPointer && distanceToPointer < 145) {
      context.beginPath();
      context.moveTo(star.x, star.y);
      context.lineTo(pointer.x, pointer.y);
      context.strokeStyle = `rgba(112, 242, 226, ${(1 - distanceToPointer / 145) * .24})`;
      context.lineWidth = .8;
      context.stroke();
    }
  }
  animationFrame = reducedMotion ? 0 : window.requestAnimationFrame(drawScene);
}

function startCanvas() {
  if (reducedMotion && canvasVisible && !document.hidden) {
    drawScene(0);
  } else if (!animationFrame && canvasVisible && !document.hidden) {
    animationFrame = window.requestAnimationFrame(drawScene);
  }
}

resizeCanvas();
startCanvas();
window.addEventListener("resize", () => {
  resizeCanvas();
  startCanvas();
});
window.addEventListener("pointermove", (event) => {
  const bounds = canvas.getBoundingClientRect();
  pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  if (event.pointerType === "mouse" && !reducedMotion && canvasWidth > 800) {
    const offsetX = (pointer.x - canvasWidth / 2) / canvasWidth;
    const offsetY = (pointer.y - canvasHeight / 2) / canvasHeight;
    heroContent.style.setProperty("--tilt-x", `${offsetX * 1.4}deg`);
    heroContent.style.setProperty("--tilt-y", `${offsetY * -1.2}deg`);
  }
}, { passive: true });
window.addEventListener("pointerleave", () => {
  pointer = { x: -1000, y: -1000 };
  heroContent.style.setProperty("--tilt-x", "0deg");
  heroContent.style.setProperty("--tilt-y", "0deg");
});
document.addEventListener("visibilitychange", startCanvas);

if ("IntersectionObserver" in window) {
  const canvasObserver = new IntersectionObserver(([entry]) => {
    canvasVisible = entry.isIntersecting;
    if (canvasVisible) startCanvas();
  });
  canvasObserver.observe(canvas);
}
