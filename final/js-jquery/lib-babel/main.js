"use strict";

$(document).ready(function () {
  "use strict"; //slider

  var index = 0;
  var slides = $('.lenta li');
  $(document).on("click", ".arrow_left", function () {
    SlideLeft();
  });
  $(document).on("click", ".arrow_right", function () {
    SlideRight();
  });

  function Slide() {
    document.querySelector('.lenta').style.left = -index * 100 + "vw";
  }

  var sliderInterval = setInterval(function () {
    SlideRight();
  }, 9000);

  function SlideRight() {
    index++;

    if (index === slides.length) {
      index = 0;
    }

    Slide();
  }

  function SlideLeft() {
    index--;

    if (index < 0) {
      index = slides.length - 1;
    }

    Slide();
  }

  document.querySelector('.arrow_left').onmouseover = function () {
    clearInterval(sliderInterval);
  };

  document.querySelector('.arrow_right').onmouseover = function () {
    clearInterval(sliderInterval);
  };

  document.querySelector('.arrow_left').onmouseout = function () {
    sliderInterval = setInterval(function () {
      SlideRight();
    }, 9000);
  };

  document.querySelector('.arrow_right').onmouseout = function () {
    sliderInterval = setInterval(function () {
      SlideRight();
    }, 9000);
  };
});
$(document).ready(function () {
  "use strict"; //find

  $(document).on("click", ".menus", function () {
    $(".active").removeClass("active");
    $(this).children().addClass("active");
    var a = $(this).data("id");
    $(".HOTELSmenu").each(function () {
      if ($(this).data("id") == a) {
        $(".open").removeClass("open");
        $(this).addClass("open");
      }
    });
  });
});