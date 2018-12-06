document.addEventListener("DOMContentLoaded", () => {

  const html = document.querySelector("html");
  const toggle = document.getElementById("toggle");

  toggle.addEventListener("change", (event) => {

    event.preventDefault();
    const mode = event.target.value;

    html.className = `theme-${mode}`;

    toggle.style.width = String(`[THEME: ${mode}]`).length + "ch";

  });

  toggle.style.width = String(`[THEME: ${toggle.value}]`).length + "ch";

});
