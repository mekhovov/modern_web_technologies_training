/****************************
*  
*  Demonstration of jQuery Draggable and Droppable plugins
*
****************************/

$(document).ready(init);

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
    activeClass: 'active',	// будет применен к целевому элементу в момент начала перемещения
    hoverClass: 'hover',		// будет применен к целевому элементу в момент, когда перемещаемый элемент окажется над целевым элементом
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
  // ------------- делаем головы прилипающими к другим частям тела --------
  $(".head").draggable({
    snap: true
  });
  // ------------- делаем голову зомби не перемещаемой -----------
  $("#zombie .head").draggable("destroy");  	// удаляет всю функциональность плагина Draggable. 
  // ------------- весь зомби будет тянуться за голову  ----------- 
  $("#zombie").draggable({
    handle: ".head"  			// определяет, за какой элемент внутри данного осуществляется перетаскивание. 
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





