// 🌿 GreenFood Website Script
// Features: Loader fade-out | Scroll animations | Smooth scroll | Navbar shrink

// --- LOADER FADE OUT ---
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const main = document.querySelector(".main-content");

  // Hide main content initially
  if (main) {
    main.style.opacity = "0";
    main.style.transition = "opacity 1s ease-in";
  }

  // Fade out loader and show content
  setTimeout(() => {
    if (loader) {
      loader.style.transition = "opacity 1s ease";
      loader.style.opacity = "0";
    }

    setTimeout(() => {
      if (loader) loader.style.display = "none";
      if (main) main.style.opacity = "1";
    }, 1000);
  }, 2000);
});

// --- SCROLL ANIMATIONS ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

// Observe elements with data-animate attribute
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-animate]").forEach((el) => {
    observer.observe(el);
  });
});

// --- SMOOTH SCROLL FOR INTERNAL LINKS ---
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// --- NAVBAR SHRINK ON SCROLL ---
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }
});
