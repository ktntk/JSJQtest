// ローディングアニメーション
const loadAnime = $('.loader');
$(window).on('load', function () {
  loadAnime.delay(3500).fadeOut(1000);
});

function stopload() {
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()', 10000);

// フェードイン
function fadeIn() {
  // フェードアップ
  $('.fadeUpTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top - 50;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
  // フェードレフト
  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top - 50;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });
  // フェードライト
  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top - 50;
    let windowHeight = $(window).height();
    if (scroll >= triTop - windowHeight) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });
  // フェードダウン
  $('.fadeDownTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top - 50;
    let windowHeight = $(window).height();
    if (scroll >= triTop - windowHeight) {
      $(this).addClass('fadeDown');
    } else {
      $(this).removeClass('fadeDown');
    }
  });
  // フェードオン
  $('.fadeOnTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeOn');
    } else {
      $(this).removeClass('fadeOn');
    }
  });
}

$(window).scroll(function () {
  fadeIn();
});


// ハンバーガーメニュー
window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 769) {
  } else {
    $("header .drawer").click(function () {
      $('body').toggleClass('nav-open');
      $('header .header_nav').fadeToggle(200);
    });
    $("header li a").click(function () {
      $('body').toggleClass('nav-open');
      $('header .header_nav').fadeToggle(200);
    });
  }
});