const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const projectCards = [...document.querySelectorAll("[data-category]")];
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");
const matrixCanvas = document.querySelector("[data-matrix]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

year.textContent = new Date().getFullYear();

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    projectCards.forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim();
  const message = String(formData.get("message")).trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Completa todos los campos para preparar el mensaje.";
    return;
  }

  const subject = encodeURIComponent(`Contacto desde portafolio - ${name}`);
  const body = encodeURIComponent(`${message}\n\nNombre: ${name}\nCorreo: ${email}`);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=calivallelozano@gmail.com&su=${subject}&body=${body}`;

  formStatus.textContent = "Se abrira Gmail en una nueva pestana con el mensaje listo.";
  window.open(gmailUrl, "_blank", "noopener,noreferrer");
});

const startMatrix = () => {
  if (!matrixCanvas || prefersReducedMotion) return;

  const context = matrixCanvas.getContext("2d");
  const symbols = "01{}[]<>/\\$#PythonRPAAPI";
  const fontSize = 16;
  let columns = 0;
  let drops = [];

  const resize = () => {
    const pixelRatio = window.devicePixelRatio || 1;
    matrixCanvas.width = window.innerWidth * pixelRatio;
    matrixCanvas.height = window.innerHeight * pixelRatio;
    matrixCanvas.style.width = `${window.innerWidth}px`;
    matrixCanvas.style.height = `${window.innerHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    columns = Math.floor(window.innerWidth / fontSize);
    drops = Array.from({ length: columns }, () => Math.random() * -100);
  };

  const draw = () => {
    context.fillStyle = "rgba(5, 8, 12, 0.08)";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.font = `${fontSize}px JetBrains Mono, monospace`;

    drops.forEach((drop, index) => {
      const char = symbols[Math.floor(Math.random() * symbols.length)];
      const x = index * fontSize;
      const y = drop * fontSize;

      context.fillStyle = Math.random() > 0.985 ? "#3aa8ff" : "#37ffc1";
      context.fillText(char, x, y);

      if (y > window.innerHeight && Math.random() > 0.975) {
        drops[index] = 0;
      } else {
        drops[index] = drop + 0.55;
      }
    });

    window.requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
};

startMatrix();
