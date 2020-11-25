$("#head__menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.btn_top').fadeIn();
    } else {
      $('.btn_top').fadeOut();
    }
  });
  $('.btn_top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
  });
