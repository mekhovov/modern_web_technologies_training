/****************************
*  
*  Demonstration of jQuery Draggable and Droppable plugins
*
****************************/

$(document).ready(init);


function animate(element, anim)
{
  $(element).css({'-webkit-animation' : ''});
  window.setTimeout(function() {
    $(element).delay(2000).css({'-webkit-animation' : anim});
  }, 0  );
};


function lets_rock (){

  $("#lets_rock .h0").hide();
  $("#rock_mp3").append('<audio autoplay controls >  <source src="audio/StoneSour-30-30-150.mp3"> </audio>').fadeIn();
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
  $("#frank .guitar").css({'left' : '80px', 'top' : '80px', 'z-index':'3', '-webkit-transform' : 'rotate(100deg) scale(1.4)', 'background' : 'transparent url("images/skeleton/s_rfoot.png") no-repeat', 'width' : '52px', 'height' : '120px', 'position' : 'absolute'});
  $("#zombie .guitar").css({'left' : '80px', 'top' : '70px', 'z-index':'3', '-webkit-transform' : 'rotate(100deg) scale(1.4)', 'background' : 'transparent url("images/skeleton/s_rfoot.png") no-repeat', 'width' : '52px', 'height' : '120px', 'position' : 'absolute'});
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
  
};



function init(){
  // ------------- делаем все эл-ты draggable---- ---------------
  $(".head, .lhand, .body, .rhand, .lfoot, .rfoot").draggable({		// будут перемещаемыми
    cursor: 'move',					// вид курсора при перетаскивании
    opacity: 0.5,
  });
  // ------------- draggable поведение головы скелета -----------
  $("#skeleton .head").draggable({
    grid: [20, 20],
    containment:'parent',		// ограничивает область перетаскивания (parent (родительский элемент), document (текущий документ), window (окно), [x1, y1, x2, y2])
    revert: true,						// будет ли элемент возвращен на свое место после перетаскивания
    revertDuration: 1000,		// за какое время элемент будет возвращен на свое место после перетаскивания
    helper : 'clone',				// в процессе перетягивания до момента «drop» сам элемент будет неподвижен
    drag : function(event, ui) {
      var a=ui.position.top;
      var b=ui.offset.top;
      $('#res').text('What are you doing? It`s my head!! [position] parent: '+a+' abs: '+b);
    },
    stop: function(event, ui) {
      $('#res').text('I Kill You!');
    }
  });
  // ------------- droppable параметры головы скелета -----------
  $("#skeleton .head").droppable({
    accept: '.head',				// будет принимать только те элементы, которые подходят по селектору
    activeClass: 'active_head',	// будет применен к целевому элементу в момент начала перемещения
    hoverClass: 'hover_pulse',		// будет применен к целевому элементу в момент, когда перемещаемый элемент окажется над целевым элементом
    drop: function(){	
      $('#res1').text($('#res1').text() + " Head: +1 ");  // $(this) - drop, $(ui.draggable) - drag
    },
    stop: function(event, ui) {
      $('#res').text('I Kill You!');
    },
    activate: function(){	
      $('#res').text("Oooh yeees, give me this head.. =%-) ");
      $("#skeleton .head").html('<img src="images/skeleton/s_head_give_it_to_me.png" />');
    },
    deactivate: function(){	
      $('#res').text("Oooh yeees, give me this head.. =%-) ");
      $("#skeleton .head").html('');
    },
    over : function(){	
      $('#res').text("nyam-nyam.. mmm..");
    },
    out  : function(){
      $('#res').text("OH, noooo !!! Give it to me  >:-[ ");
      $('#res1').text($('#res1').text() + " Head: -1 ");
    },
  });
  // части тела скелета будут связаны с частями тела Френка и Зомби
  $("#skeleton .body").droppable({ accept: '.body', activeClass: 'hover_pulse'});
  $("#skeleton .rhand").droppable({ accept: '.rhand', activeClass: 'hover_pulse'});
  $("#skeleton .lhand").droppable({ accept: '.lhand', activeClass: 'hover_pulse'});
  $("#skeleton .rfoot").droppable({ accept: '.rfoot', activeClass: 'hover_pulse'});
  $("#skeleton .lfoot").droppable({ accept: '.lfoot', activeClass: 'hover_pulse'});
  
  // ------------- делаем головы прилипающими к другим частям тела --------
  $(".head").draggable({
    snap: true
  });
  // ------------- делаем голову зомби не перемещаемой -----------
  $("#zombie .head").draggable("destroy");  	// удаляет всю функциональность плагина Draggable. 
  // ------------- весь зомби будет тянуться за голову  ----------- 
  $("#zombie").draggable({
    handle: ".head",  			// определяет, за какой элемент внутри данного осуществляется перетаскивание. 
    drag : function(event, ui) {  // немного анимации
      $("#zombie .head").css("-webkit-animation", "head_jump 2.3s infinite ease-in-out");
      $("#zombie .body").css("-webkit-animation", "body_dance 2.3s infinite ease-in-out");
      $("#zombie .rhand").css("-webkit-animation", "rhand_dance 2.3s infinite ease-in-out");
      $("#zombie .lhand").css("-webkit-animation", "lhand_dance 2.3s infinite ease-in-out");
      $("#zombie .rfoot").css("-webkit-animation", "rfoot_dance 2.3s infinite ease-in-out");
      $("#zombie .lfoot").css("-webkit-animation", "lfoot_dance 2.3s infinite ease-in-out");
    },
    stop : function(event, ui) {  // убираем анимацию
      $("#zombie .head").css("-webkit-animation", "");
      $("#zombie .body").css("-webkit-animation", "");
      $("#zombie .rhand").css("-webkit-animation", "");
      $("#zombie .lhand").css("-webkit-animation", "");
      $("#zombie .rfoot").css("-webkit-animation", "");
      $("#zombie .lfoot").css("-webkit-animation", "");
    }
  });
  
 
  $(".head, .lhand, .body, .rhand, .lfoot, .rfoot").css('position', 'absolute');	// cmall bug fix for chrome :)
  
}


// ##################################### some information #############################################

/* DRAGGABLE

	axis - ограничивает перетаскивание элемента либо по горизонтали (x) либо по вертикали (y) оси координат.

	delay - определяет время в миллисекундах, по истечении которого, начнется перетаскивание 

	distance - определяет расстояние в пикселах, которое указатель мыши должен пройти после того, как вы нажали на кнопку мыши, прежде чем начнется перетаскивание

	zIndex - определяет значение свойства z-index (номер слоя) перемещаемого элемента. 
	
	disable/enable - временно запрещает/разрешае работу всей функциональности плагина Draggable
	
*/


/* DROPPABLE

	greedy - этот параметр используется, если целевой элемент является вложенным в другой целевой элемент. По умолчанию параметр имеет значение false. Если установить в true, то сброс будет происходить во внутренний целевой элемент, но не в элемент-родитель.

	tolerance - определяет, когда будет происходить "сброс" элемента, при нахождении его над целевым элементом. Возможны следующие значения: 
		- intersect - перемещаемый элемент перекрыл целевой хотя бы на 50% (значение по умолчанию),
		- fit – перемещаемый элемент полностью вошел в целевой элемент,
		- pointer – указатель мыши вошел в целевой элемент,
		- touch – перемещаемый элемент пересек границу целевого.
		
	Следующие пять параметров связаны с событиями:
		activate - событие наступает с началом перемещения.
		deactivate - событие наступает в момент окончания перемещения.
		over - событие наступает при входе перемещаемого элемента в целевой.
		out - событие наступает при выходе перемещаемого элемента из целевого.
		drop - событие наступает в момент "сброса" перемещаемого элемента в целевой.

*/

/* some links

	http://www.site-do.ru/js/jquery11.php
	http://www.site-do.ru/js/jquery10.php
	http://www.simplecoding.org/drag-drop-s-ispolzovaniem-jquery-ui.html
	http://printables.kaboose.com/printable-monsters.html
	http://www.xiper.net/collect/js-plugins/ui/drag-n-drop.html
	http://www.xiper.net/collect/js-plugins/ui/easydrag.html		
	http://jqueryui.com/demos/draggable/#sortable
	http://www.answerium.com/article33/
	http://www.coolwebmasters.com/tutorials/1071-drag-and-drop-how-to-drag-and-drop-objects.html
	http://www.1stwebdesigner.com/freebies/drag-drop-jquery-plugins/

*/





