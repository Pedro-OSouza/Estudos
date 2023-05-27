const menu = $("#menu-btn");

function mostrarMenu() {
  if ($("#opcoes").css("display") == "none") {
    $("#opcoes").css("display", "block");
    $("#menu").css("display", "block");
    $(".menu-opcoes").css("display", "block");
    $(".lado-menu").css("display", "block");
    $(".lado-menu").css("z-index", "1");
    $(".lado-menu").css("margin-right", "0%");
  } else {
    $("#opcoes").css("display", "none");
    $(".menu-opcoes").css("display", "none");
    $(".lado-menu").css("margin-right", "-15%");
  }
  console.log("algo está funcionando. o problema não é aqui");
  console.log($("#opcoes").css("display"));
}

function clicarOpcao() {
  mostrarMenu();
}

function scroll(e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top,
    alturaHeader = $("header").innerHeight();

  $("html, body").animate(
    {
      scrollTop: targetOffset - alturaHeader,
    },
    1000
  );
}

$("li a").click(scroll);
$("#menu-btn").click(mostrarMenu);
$(".menu-opcoes").click(clicarOpcao);
