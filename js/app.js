document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  document.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") && window.location.pathname.endsWith(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
