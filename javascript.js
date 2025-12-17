/**
 * File: javascript.js
 * Description: Main JavaScript for the website
 * Author: Sheikh Hussain (GitHub: Sheikh-H)
 * Date: 2025-10-25
 * Notes: Most of my javascripting right now is made with using AI. I haven't had a lot of experience coding with it myself but from what I can see it is very similar to coding with Python. As I begin to make more projects and continue to adjust my portfolio. I could imagine that I'll be learning how to use and code in Python.
 */

"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const MenuButton = document.querySelector(".mobile_menu_button");
  const MenuBar = document.querySelector(".mobile_menu");

  function ToggleMenu() {
    MenuButton.classList.toggle("active");
    MenuBar.classList.toggle("active");
    document.body.style.overflow = MenuBar.classList.contains("active")
      ? "hidden"
      : "auto";
  }

  document.addEventListener("click", (e) => {
    if (!MenuBar.contains(e.target) && !MenuButton.contains(e.target)) {
      if (MenuBar.classList.contains("active")) {
        ToggleMenu();
      }
    }
  });

  MenuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    ToggleMenu();
  });

  document.getElementById("header_logo_div").onclick = () => {
    location.href = "./index.html";
  };

  // ========== EXISTING PROJECT ANIMATION (on index.html) ==========
  const projectsSection = document.querySelector("#mprojects");
  const projects = document.querySelectorAll(".project");

  const projectObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.2,
    }
  );

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projects.forEach((project) => projectObserver.observe(project));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  if (projectsSection) {
    sectionObserver.observe(projectsSection);
  }

  // ========== NEW: WEBSITE BUILDS PAGE SCROLL ANIMATION ==========
  const websiteProjects = document.querySelectorAll(".website_project");

  if (websiteProjects.length > 0) {
    const websiteProjectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            websiteProjectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    websiteProjects.forEach((project) =>
      websiteProjectObserver.observe(project)
    );
  }

  // ========== MOBILE MENU LINK HANDLING ==========
  const menuLinks = document.querySelectorAll(".mobile_menu ul a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (MenuBar.classList.contains("active")) {
        ToggleMenu();
      }
    });
  });

  // ========== ICON ANIMATION ==========
  const icons = document.querySelectorAll(".welcome_social_icons img");

  let current = 0;

  function animateIcon() {
    icons.forEach((icon) => icon.classList.remove("jumpShakeActive"));
    if (icons.length > 0) {
      icons[current].classList.add("jumpShakeActive");
      current = (current + 1) % icons.length;
      setTimeout(animateIcon, 800);
    }
  }

  animateIcon();

  // ========== SCROLL ANIMATIONS FOR ELEMENTS ==========
  const animatedElements = document.querySelectorAll(
    ".slide-in-left, .slide-in-right, .slide-in-up, .fade-in"
  );

  const handleScrollAnimation = () => {
    const triggerBottom = window.innerHeight * 0.85;
    animatedElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();

  // Run once on page load (if applicable)
  if (typeof redirectToMobilePage === "function") {
    redirectToMobilePage();
  }

  const pythonProjects = document.querySelectorAll(".python_project");

  if (pythonProjects.length > 0) {
    const pythonProjectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            pythonProjectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    pythonProjects.forEach((project) => pythonProjectObserver.observe(project));
  }

  // Select all certificates
  const certificates = document.querySelectorAll(".certificate_item");

  function checkCertificates() {
    const triggerBottom = window.innerHeight * 0.9; // when 90% of viewport height

    certificates.forEach((cert) => {
      const certTop = cert.getBoundingClientRect().top;

      if (certTop < triggerBottom) {
        cert.classList.add("slide-up"); // Add class to trigger animation
      }
    });
  }

  // Listen to scroll event
  window.addEventListener("scroll", checkCertificates);

  // Trigger once on page load
  checkCertificates();

  // Select all elements with the slide-in class
  const slideElements = document.querySelectorAll(".slide-in");

  // Function to add 'active' class when element is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2, // trigger when 20% of element is visible
    }
  );

  // Observe each slide-in element
  slideElements.forEach((el) => observer.observe(el));

  // Optional: Automatically alternate left/right for desktop
  if (window.innerWidth > 768) {
    slideElements.forEach((el, index) => {
      if (index % 2 === 0) {
        el.classList.add("slide-in-left");
      } else {
        el.classList.add("slide-in-right");
      }
    });
  } else {
    // Mobile: you can manually assign left/right in HTML
  }
});
