document.addEventListener("DOMContentLoaded", () => {

  const html = document.querySelector("html");
  const toggle = document.getElementById("toggle");

  toggle.addEventListener("change", (event) => {

    event.preventDefault();

    const mode = event.target.value;
    html.classList.toggle("theme-one-light", mode === "one-light");
    html.classList.toggle("theme-one-dark", mode === "one-dark");
    html.classList.toggle("theme-monokai-light", mode === "monokai-light");
    html.classList.toggle("theme-monokai-dark", mode === "monokai-dark");

    toggle.style.width = String(`[THEME: ${mode}]`).length + "ch";

  });

});
