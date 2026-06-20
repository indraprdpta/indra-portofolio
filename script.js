// ========================= CUSTOM CURSOR =========================

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

// CURSOR MOVE

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

});

// HOVER EFFECT

const hoverItems = document.querySelectorAll(
  "a, button, .project-card, .glass-card, .award-card, .timeline-card, .contact-info"
);

hoverItems.forEach((item) => {

  item.addEventListener("mouseenter", () => {

    cursor.classList.add("active");

  });

  item.addEventListener("mouseleave", () => {

    cursor.classList.remove("active");

  });

});

// ========================= SCROLL ANIMATION =========================

const revealElements = document.querySelectorAll(
  ".glass-card, .project-card, .timeline-card, .award-card, .contact-box"
);

function revealOnScroll() {

  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {

    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      el.style.opacity = "1";

      el.style.transform = "translateY(0px)";

    }

  });

}

// INITIAL STYLE

revealElements.forEach((el) => {

  el.style.opacity = "0";

  el.style.transform = "translateY(40px)";

  el.style.transition = "all 0.8s ease";

});

// RUN

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ========================= FLOATING PARTICLES =========================

for (let i = 0; i < 20; i++) {

  const particle = document.createElement("div");

  particle.style.position = "fixed";

  particle.style.width = "5px";

  particle.style.height = "5px";

  particle.style.borderRadius = "50%";

  particle.style.background = "rgba(56,189,248,0.35)";

  particle.style.left =
    Math.random() * window.innerWidth + "px";

  particle.style.top =
    Math.random() * window.innerHeight + "px";

  particle.style.zIndex = "-1";

  particle.style.pointerEvents = "none";

  particle.style.animation =
    `float ${Math.random() * 10 + 8}s infinite ease-in-out`;

  document.body.appendChild(particle);

}

// ========================= CARD HOVER EFFECT =========================

const cards = document.querySelectorAll(
  ".glass-card, .project-card, .timeline-card"
);

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 25);

    const rotateY = ((centerX - x) / 25);

    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.02)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

  });

});

// ========================= NAVBAR ACTIVE =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {

      link.classList.add("active");

    }

  });

});

// ========================= SMOOTH HERO EFFECT =========================

const heroTitle = document.querySelector(".hero-left h1");

window.addEventListener("mousemove", (e) => {

  const x =
    (window.innerWidth / 2 - e.pageX) / 40;

  const y =
    (window.innerHeight / 2 - e.pageY) / 40;

  heroTitle.style.transform =
    `translate(${x}px, ${y}px)`;

});

// ========================= CONSOLE =========================

console.log("🔥 Interactive Portfolio Ready");