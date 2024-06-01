$(document).ready(function () {
  $(".our-work ul li").click(function () {
    $(".our-work ul li").removeClass("active");
    $(this).addClass("active rounded-pill");
    var cla = $(this).attr("id");
    if (cla === "all") {
      $(".our-work .box img").parent().parent().hide();
      $(".our-work .box img").parent().parent().fadeIn();
    } else {
      $(".our-work .box img").parent().parent().hide();
      $(".our-work .box ." + cla)
        .parent()
        .parent()
        .fadeIn();
    }
  });
});
