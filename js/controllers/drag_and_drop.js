/****************************
*  
*  Demonstration of jQuery Draggable and Droppable plugins and some CSS3 animation
*
*  Functions:
*    - drag_n_drop  : initialize Draggable and Droppable elements
*
****************************/

goog.provideAll (['controller.drag_n_drop']);
goog.requireAll (['controller.lets_rock', 'view.view']);

function drag_n_drop () {
	
	show_menu('skeleton');
	
  stop_lets_rock ();
  view.dragNdropInit();
  // ------------- ������ ��� ��-�� draggable---- ---------------
  $(".head, .lhand, .body, .rhand, .lfoot, .rfoot").draggable({		// ����� �������������
    cursor: 'move',					// ��� ������� ��� ��������������
    opacity: 0.5,
  });
	
  // ------------- draggable ��������� ������ ������� -----------
  $("#skeleton .head").draggable({
    grid: [20, 20],
    containment:'parent',		// ������������ ������� �������������� (parent (������������ �������), document (������� ��������), window (����), [x1, y1, x2, y2])
    revert: true,						// ����� �� ������� ��������� �� ���� ����� ����� ��������������
    revertDuration: 1000,		// �� ����� ����� ������� ����� ��������� �� ���� ����� ����� ��������������
    helper : 'clone',				// � �������� ������������� �� ������� �drop� ��� ������� ����� ����������
    drag : function(event, ui) {
      var a=ui.position.top;
      var b=ui.offset.top;
      $('#res').text('What are you doing? It`s my head!! [position] parent: '+a+' abs: '+b);
    },
    stop: function(event, ui) {
      $('#res').text('I Kill You!');
    }
  });
	
  // ------------- droppable ��������� ������ ������� -----------
  $("#skeleton .head").droppable({
    accept: '.head',				// ����� ��������� ������ �� ��������, ������� �������� �� ���������
    activeClass: 'active_head',	// ����� �������� � �������� �������� � ������ ������ �����������
    hoverClass: 'hover_pulse',		// ����� �������� � �������� �������� � ������, ����� ������������ ������� �������� ��� ������� ���������
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
	
  // ����� ���� ������� ����� ������� � ������� ���� ������ � �����
  $("#skeleton .body").droppable({ accept: '.body', activeClass: 'hover_pulse'});
  $("#skeleton .rhand").droppable({ accept: '.rhand', activeClass: 'hover_pulse'});
  $("#skeleton .lhand").droppable({ accept: '.lhand', activeClass: 'hover_pulse'});
  $("#skeleton .rfoot").droppable({ accept: '.rfoot', activeClass: 'hover_pulse'});
  $("#skeleton .lfoot").droppable({ accept: '.lfoot', activeClass: 'hover_pulse'});
  
  // ------------- ������ ������ ������������ � ������ ������ ���� --------
  $(".head").draggable({
    snap: true
  });
	
  // ------------- ������ ������ ����� �� ������������ -----------
  $("#zombie .head").draggable("destroy");  	// ������� ��� ���������������� ������� Draggable. 
  
  // ------------- ���� ����� ����� �������� �� ������  ----------- 
  $("#zombie").draggable({
    handle: ".head",  			// ����������, �� ����� ������� ������ ������� �������������� ��������������. 
    drag : function(event, ui) {  // ������� ��������
      $("#zombie .head").css("-webkit-animation", "head_jump 2.3s infinite ease-in-out");
      $("#zombie .body").css("-webkit-animation", "body_dance 2.3s infinite ease-in-out");
      $("#zombie .rhand").css("-webkit-animation", "rhand_dance 2.3s infinite ease-in-out");
      $("#zombie .lhand").css("-webkit-animation", "lhand_dance 2.3s infinite ease-in-out");
      $("#zombie .rfoot").css("-webkit-animation", "rfoot_dance 2.3s infinite ease-in-out");
      $("#zombie .lfoot").css("-webkit-animation", "lfoot_dance 2.3s infinite ease-in-out");
    },
    stop : function(event, ui) {  // ������� ��������
      $("#zombie .head").css("-webkit-animation", "");
      $("#zombie .body").css("-webkit-animation", "");
      $("#zombie .rhand").css("-webkit-animation", "");
      $("#zombie .lhand").css("-webkit-animation", "");
      $("#zombie .rfoot").css("-webkit-animation", "");
      $("#zombie .lfoot").css("-webkit-animation", "");
    }
  });
  
  $(".head, .lhand, .body, .rhand, .lfoot, .rfoot").css('position', 'absolute');	// small bug fix for chrome :) 
}

// ##################################### some information #############################################
/* DRAGGABLE

	axis - ������������ �������������� �������� ���� �� ����������� (x) ���� �� ��������� (y) ��� ���������.

	delay - ���������� ����� � �������������, �� ��������� ��������, �������� �������������� 

	distance - ���������� ���������� � ��������, ������� ��������� ���� ������ ������ ����� ����, ��� �� ������ �� ������ ����, ������ ��� �������� ��������������

	zIndex - ���������� �������� �������� z-index (����� ����) ������������� ��������. 
	
	disable/enable - �������� ���������/�������� ������ ���� ���������������� ������� Draggable
	
*/
/* DROPPABLE

	greedy - ���� �������� ������������, ���� ������� ������� �������� ��������� � ������ ������� �������. �� ��������� �������� ����� �������� false. ���� ���������� � true, �� ����� ����� ����������� �� ���������� ������� �������, �� �� � �������-��������.

	tolerance - ����������, ����� ����� ����������� "�����" ��������, ��� ���������� ��� ��� ������� ���������. �������� ��������� ��������: 
		- intersect - ������������ ������� �������� ������� ���� �� �� 50% (�������� �� ���������),
		- fit � ������������ ������� ��������� ����� � ������� �������,
		- pointer � ��������� ���� ����� � ������� �������,
		- touch � ������������ ������� ������� ������� ��������.
		
	��������� ���� ���������� ������� � ���������:
		activate - ������� ��������� � ������� �����������.
		deactivate - ������� ��������� � ������ ��������� �����������.
		over - ������� ��������� ��� ����� ������������� �������� � �������.
		out - ������� ��������� ��� ������ ������������� �������� �� ��������.
		drop - ������� ��������� � ������ "������" ������������� �������� � �������.

*/
