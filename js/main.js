
$(function() {

  function resize() {
    // 获取屏幕宽度
    var windowWidth = $(window).width();
    // 判断屏幕属于大还是小
    var isSmallScreen = windowWidth < 768;
    $('#myCarousel > .carousel-inner > .item').each(function(i, item) {
      var $item = $(item);
      var imgSrc =
        isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
      // 设置背景图片
      $item.css('backgroundImage', 'url("' + imgSrc + '")');
      if (isSmallScreen) {
        $item.html('<img src="' + imgSrc + '" alt="" />');
      } else {
        $item.empty();
      }
    });
  }
  $(window).on('resize', resize).trigger('resize');


 // 横向滚动条
 var wrapp=$('.nav-tabs');
 var width=0;
 wrapp.children().each(function(index,element){
      width+=element.clientWidth;
  });
 if(width>$(window).width()&& $(window).width()<480){
   $('.wrapp').css('overflow-x','scroll');
   wrapp.css('width',width);
 }


 // 新闻
 $('#news .nav  li a').click(function(){
     $('.news').html($(this).eq($(this).index()).attr('data-title'));
 });
 
 // 模态框应用

$('.pass').focus(function(){
 $('#login-form .pic').css({
    'background':'url(img/log-pwd.png)no-repeat',
    'top':'-21px'
  });
});
$('.pass').blur(function(){
  $('#login-form .pic').css({
    'background':'url(img/success.png)no-repeat',
    'top':'-34px'
  });
})















});
