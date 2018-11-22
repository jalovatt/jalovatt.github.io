document.addEventListener("DOMContentLoaded", () => {

  const html = document.querySelector("html");
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    html.classList.toggle("dark-mode");
  });

});