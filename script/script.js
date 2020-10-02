$(function(){
      //ページ内遷移
  $('a[href^=#]').click(function() {
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
 });
 //可視範囲見出し揺れる
  $(window).scroll(function (){
    $(".headline").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fluffy");
      } else {
        $(this).removeClass("fluffy");
      }
    });
  });

 //背景パララックス

  $('#top').parallax({imageSrc:'/img/frank-mckenna-eXHeq48Z-Q4-unsplash.jpg'});
  $('#skills').parallax({imageSrc:'/img/programming-1873854_1280.png'});
  $('#contact').parallax({imageSrc:'/img/benjamin-voros-phIFdC6lA4E-unsplash.jpg'})

  //モーダルウィンドウ
  $('.modal').modaal({});
 //フェードイン
  $('h1,h2').fadeIn(2000);
 //トップボタン
 $(".top-button").hide();
 $(window).scroll(function () {
     if ($(this).scrollTop() > 100) { 
      $(".top-button").fadeIn();
     } else {
      $(".top-button").fadeOut();
     }
    });
});

