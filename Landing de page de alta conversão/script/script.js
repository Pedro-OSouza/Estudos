const btn_menu = document.getElementById("menu-icon");
var menu_lateral = document.querySelector(".menu-lateral"),
        menu = document.querySelector(".menu"),
        blur = document.querySelector(".blur"),
        altura = window.innerHeight,
        largura = window.innerWidth;

btn_menu.addEventListener("click", exibir);

function exibir() {
            if (menu_lateral.style.marginLeft == "0%" && largura <= 600){
        menu.style.display = "block";
        menu_lateral.style.marginLeft = "-35%"
        blur.style.display = "block"
        blur.style.transition = "0.5s"
        menu_lateral.style.transition = "0.5s"
        } else {
            menu.style.display = "block";
        menu_lateral.style.marginLeft = "0%"
        blur.style.display = "none"
        blur.style.transition = "0.5s"
        menu_lateral.style.transition = "0.5s"
        }
}


