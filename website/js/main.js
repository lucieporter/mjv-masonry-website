const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const year = document.getElementById("year");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", function () {
    siteNav.classList.toggle("active");
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

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