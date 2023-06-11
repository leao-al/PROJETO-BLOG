window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 0);
});

const btnHamburguer = document.getElementById("btn__hamburguer");
const menuMobile = document.getElementById("hamburguer-menu");

btnHamburguer.addEventListener("click", () => {
  if (menuMobile.classList.contains("active")) {
    menuMobile.classList.remove("active");
  } else {
    menuMobile.classList.add("active");
  }
});
