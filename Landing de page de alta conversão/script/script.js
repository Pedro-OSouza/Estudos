const btn_menu = document.getElementById("menu-icon");
var menu_lateral = document.querySelector(".menu-lateral"),
    menu = document.querySelector(".menu"),
    _blur = document.querySelector(".blur"),
    altura = window.innerHeight;
        

btn_menu.addEventListener("click", exibir);
window.addEventListener("resize", mudar);

function mudar() {
    var largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if(largura > 600 ) {
        btn_menu.style.visibility = "hidden";
        menu.style.display = "none";
        menu_lateral.style.visibility = "hidden";
        _blur.style.display = "none";
        _blur.style.transition = "0s";
        menu_lateral.style.transition = "0s";
        btn_menu.style.transition = "0s"; 
        largura = largura;
    } else {
        btn_menu.style.visibility = "visible";
        exibir();
    }
    console.log(`A largura atual é ${largura}`);
}

function exibir() {
            if (menu_lateral.style.visibility == "hidden"){
                btn_menu.style.marginRight = "5rem";
                btn_menu.style.transition = "0.1s"; 
                menu.style.display = "block";
                menu_lateral.style.visibility = "visible";
                _blur.style.display = "block";
                _blur.style.transition = "0.5s";
                menu_lateral.style.transition = "0.5s";
            } else {
                btn_menu.style.marginRight = "0rem";
                btn_menu.style.transition = "1s";
                menu_lateral.style.visibility = "hidden";
                _blur.style.display = "none";
                _blur.style.transition = "0.01s";
                menu_lateral.style.transition = "0.01s";
            }
}


