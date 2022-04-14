const navMenu = document.querySelector("#navMenu");
const menu = document.querySelector(".menu");

menu.setAttribute = "hidden";
menu.classList.remove = "active";
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menu.toggleAttribute("hidden");
  menu.classList.add("active");
});
