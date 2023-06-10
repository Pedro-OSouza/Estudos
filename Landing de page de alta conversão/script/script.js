const btn_menu = document.getElementById("menu-icon");
var menu_lateral = document.querySelector(".menu-lateral"),
        menu = document.querySelector(".menu"),
        blur = document.querySelector(".blur"),
        altura = window.innerHeight,
        largura = window.innerWidth;

btn_menu.addEventListener("click", exibir);

function exibir() {
            if (menu_lateral.style.display == "none"){
        btn_menu.style.marginLeft = "-45%";
        menu.style.display = "block";
        menu_lateral.style.display = "block"
        blur.style.display = "block"
        blur.style.transition = "0.5s"
        menu_lateral.style.transition = "0.5s"
        } else {
            btn_menu.style.marginLeft = "-15%"
            menu.style.display = "block";
        menu_lateral.style.display = "none"
        blur.style.display = "none"
        blur.style.transition = "0.5s"
        menu_lateral.style.transition = "0.5s"
        }
}


