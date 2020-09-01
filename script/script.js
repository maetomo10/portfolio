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
 //背景パララックス
  $('#top').parallax({imageSrc: '../img/frank-mckenna-eXHeq48Z-Q4-unsplash.jpg'});
  $('#skills').parallax({imageSrc:'../img/programming-1873854_1280.png'});

  $('h1,h2').fadeIn(7000);
});

