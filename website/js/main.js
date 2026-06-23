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

document.querySelectorAll(".site-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    if (siteNav) {
      siteNav.classList.remove("active");
    }
  });
});