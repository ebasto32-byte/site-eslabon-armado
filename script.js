// Menu hambúrguer da navbar (telemóvel)
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");
 
toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
 
// Fecha o menu ao clicar num link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
 