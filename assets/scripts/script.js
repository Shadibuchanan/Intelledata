$(window).ready(() => {
  $("#loading").fadeOut(1000);
  $("body").css("overflow", "auto");
});

var a = 0;

$(window).scroll(function () {
  $(window).scrollTop() > $("#main").offset().top + 200
    ? ($("#scrollTopBtn").fadeIn(500),
      $("#scrollTopBtn").css("display", "flex"))
    : $("#scrollTopBtn").fadeOut(500);
});

let toggleMenu = document.getElementById("toggleMenu"),
  LinksList = document.getElementById("LinksList");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  LinksList.classList.toggle("open");
});

$(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    responsive: {
      0: { items: 1, dots: true, loop: true },
      600: { items: 2, dots: true, loop: true },
      1000: { items: 4, dots: true, loop: true },
    },
  });
});

AOS.init();
