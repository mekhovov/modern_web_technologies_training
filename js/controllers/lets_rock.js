/****************************
*  
*  Demonstration of CSS3 animation
*
*  Functions:
*    - animate        : animate and stop after end
*    - lets_rock      : animation scenario
*    - stop_lets_rock : brake all animatons
*
****************************/

goog.provideAll (['controller.lets_rock', 'controller.nimate', 'controller.stop_lets_rock']);

function animate(element, anim)
{
  $(element).css({'-webkit-animation' : ''});
  window.setTimeout(function() {
    $(element).delay(2000).css({'-webkit-animation' : anim});
  }, 0  );
};

function lets_rock (){

  $("#lets_rock audio").remove();
  $("#lets_rock").append('<audio autoplay controls >  <source src="audio/StoneSour-30-30-150.mp3"> </audio>').fadeIn();
  $("#frank").append('<div class="guitar"></div>');
  $("#zombie").append('<div class="guitar"></div>');
  
  $("#skeleton").css({'top' : '150px'});
  $("#frank").css({'top' : '150px'});
  $("#zombie").css({'top' : '120px'});
  $("#zombie").css({'left' : '50px'});
  $("article.article_skeleton").css({'background' : 'transparent url("images/skeleton/wall.png") no-repeat'});
 
  $("#skeleton .body").css({'left' : '300px', 'top' : '180px', 'z-index':'2'});
  $("#skeleton .rhand").css({'left' : '360px', 'top' : '170px', 'z-index':'3'});
  $("#skeleton .lhand").css({'left' : '230px', 'top' : '170px', 'z-index':'3'});
  $("#skeleton .rfoot").css({'left' : '260px', 'top' :  '130px', 'z-index':'6', '-webkit-transform' : 'rotate(-83deg)'});
  $("#skeleton .lfoot").css({'left' : '360px', 'top' : '130px', 'z-index':'6', '-webkit-transform' : 'rotate(83deg)'});
  $("#frank .head").css({'left' : '310px', 'top' : '120px', 'z-index':'5'});
  $("#zombie .head").css({'left' : '80px', 'top' : '10px'});
  $("#frank .lhand").css({'left' : '10px', 'top' : '70px', 'z-index':'5', '-webkit-transform' : 'rotateX(180deg)'});
  $("#frank .rhand").css({'left' : '140px', 'top' : '110px', 'z-index':'2'});
  $("#zombie .lhand").css({'left' : '1px', 'top' : '80px', 'z-index':'5', '-webkit-transform' : 'rotateX(180deg)'});
  $("#zombie .rhand").css({'left' : '120px', 'top' : '90px', 'z-index':'2'});
  $("#frank .guitar").css({'left' : '20px', 'top' : '110px', 'z-index':'3', 'background' : 'transparent url("images/skeleton/s_guitar.png") no-repeat', 'width' : '190px', 'height' : '70px', 'position' : 'absolute'});
  $("#zombie .guitar").css({'left' : '20px', 'top' : '110px', 'z-index':'3', 'background' : 'transparent url("images/skeleton/s_guitar.png") no-repeat', 'width' : '190px', 'height' : '70px', 'position' : 'absolute'});
  $("#zombie .rfoot").css({'left' : '115px', 'top' :  '155px'});
  $("#zombie .lfoot").css({'left' : '60px', 'top' : '155px'});
  $("#frank .rfoot").css({'left' : '115px', 'top' :  '155px'});
  $("#frank .lfoot").css({'left' : '60px', 'top' : '155px'});
  
  animate('#skeleton .rhand', 'rock_s_rhand 3s 83 ease-in-out');
  animate('#skeleton .lhand', 'rock_s_lhand 3s 83 ease-in-out');
  animate('#skeleton .rfoot', 'rock_s_rfoot 3s 83 ease-in-out');
  animate('#skeleton .lfoot', 'rock_s_lfoot 3s 83 ease-in-out');
  animate('#frank .head',     'rock_f_head 1.5s 166 ease-in-out');
  animate('#skeleton .head',  'rock_s_head 1.5s 166 ease-in-out');
  animate('#zombie .head',    'rock_z_head 1.5s 166 ease-in-out');
  animate('#frank .body',     'rock_f_body 1.5s 166 ease-in-out');
  animate('#zombie .body',    'rock_z_body 1.5s 166 ease-in-out');
  animate('#frank .rhand',    'rock_f_rhand 1.5s 166 ease-in-out');
  animate('#frank .lhand',    'rock_f_lhand 1.5s 166 ease-in-out');
  animate('#zombie .rhand',    'rock_z_rhand 1.5s 166 ease-in-out');
  animate('#zombie .lhand',    'rock_z_lhand 1.5s 166 ease-in-out');
  animate('#zombie .guitar',    'rock_z_guitar 1.5s 166 ease-in-out');
  animate('#frank .guitar',    'rock_f_guitar 1.5s 166 ease-in-out');
  animate('#zombie, #frank, #skeleton, article.article_skeleton',    'rock_fadein 3s 1 ease-in-out');
};

function stop_lets_rock (){
  $('#zombie, #frank, #skeleton, #skeleton .rhand, #skeleton .lhand, #skeleton .rfoot, #skeleton .lfoot, #frank .head, #skeleton .head, #zombie .head, #frank .body, #zombie .body, #frank .rhand, #frank .lhand, #zombie .rhand, #zombie .lhand, #zombie .guitar, #frank .guitar').css({'-webkit-animation' : ''});
  $("#frank .guitar, #zombie .guitar").remove();
  $("article.article_skeleton").css({'background' : 'url("images/20p-black.png") repeat'});
  $("#skeleton .rfoot, #skeleton .lfoot, #frank .lhand, #zombie .lhand").css({'-webkit-transform' : 'rotate(0deg)'});
  $("#zombie .lhand, #frank .lhand").css({'z-index':'2'});
  $("#lets_rock audio").remove();
};
