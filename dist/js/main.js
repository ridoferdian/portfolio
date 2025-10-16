const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section, main");

function openMenu() {
  mobileMenu.style.pointerEvents = "auto";
  mobileMenu.classList.add("show");
  mobileMenuButton.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("show");
  mobileMenuButton.classList.remove("active");
  document.body.style.overflow = "auto";

  setTimeout(() => {
    mobileMenu.style.pointerEvents = "none";
  }, 400);
}

mobileMenuButton.addEventListener("click", openMenu);
mobileMenuClose.addEventListener("click", closeMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

var typed = new Typed(".auto-type", {
  strings: ["Rido Ferdian Krisna", "Backend Dev"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

function setActiveLink() {
  let currentSection = "";
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === currentSection) {
      link.classList.add("active");
    }
  });

  mobileMenuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      closeMenu();
      setTimeout(() => {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, 400);
    }
  });
});

AOS.init({
  once: true,
});
