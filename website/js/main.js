const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const year = document.getElementById("year");

// Mobile menu toggle
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", function () {
    siteNav.classList.toggle("active");
  });
}

// Close mobile menu when a link is clicked
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("active");
  });
});

// Set current year in footer
if (year) {
  year.textContent = new Date().getFullYear();
}

// Smooth scroll for anchor links
const pageLinks = document.querySelectorAll("a[href^='#']");
pageLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    if (siteNav) {
      siteNav.classList.remove("active");
    }
  });
});

// Add fade-in animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and portfolio items for animation
const cardsAndItems = document.querySelectorAll(".card, .portfolio-card, details");
cardsAndItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.animationDelay = `${index * 0.05}s`;
  observer.observe(item);
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);