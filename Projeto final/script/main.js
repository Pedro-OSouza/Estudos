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

  $(document).ready(function () {
    // Manipulador de evento para os links do menu
    $("#menu-items a").click(function () {
        // Fecha o menu offcanvas
        $("#menu").offcanvas("hide");
    });
});
  
