const toggleMenuButton = document.querySelector("#toggle-menu");
const mobileMenuList = document.querySelector(".header__mobile-list");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

toggleMenuButton.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.innerText === "menu") {
    e.target.innerText = "close";
    openMobileMenu();
  } else {
    e.target.innerText = "menu";
    closeMobileMenu();
  }
}

function openMobileMenu() {
  mobileMenuList.classList.add("show-menu");
  main.classList.add("blur");
  footer.classList.add("blur");
}

function closeMobileMenu(e) {
  mobileMenuList.classList.remove("show-menu");
  main.classList.remove("blur");
  footer.classList.remove("blur");
}
