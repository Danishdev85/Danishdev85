// Typing effect
const roles = [
  "Full-Stack Web Developer",
  "AI Agent Builder",
  "Agentic AI Specialist",
  "Web Scraping Expert",
];
const typedEl = document.getElementById("typed");
let roleIdx = 0, charIdx = 0, deleting = false;
function tick() {
  const word = roles[roleIdx];
  charIdx += deleting ? -1 : 1;
  typedEl.textContent = word.slice(0, charIdx);
  let delay = deleting ? 42 : 82;
  if (!deleting && charIdx === word.length) { delay = 1700; deleting = true; }
  else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 350; }
  setTimeout(tick, delay);
}
tick();

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add("in"), (i % 4) * 90);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Navbar state
const nav = document.getElementById("navbar");
addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 30);
}, { passive: true });

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
