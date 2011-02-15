/****************************
*  
*  Menu Controller
*
*  Methods:
*    - show_menu : Show elements corresponding to menu (article, aside, nav ...). Set it active.
* 
****************************/

goog.provideAll (['controller.show_menu']);

function show_menu (menu_id, action) {
	// show / hide / set active elements
  $("article,aside").hide();
  $(".curr_menu").removeClass("curr_menu");
  $(".menu_" + menu_id).addClass("curr_menu");
  $(".curr_sidebar").removeClass("curr_sidebar");
  $(".aside_" + menu_id).addClass("curr_sidebar");
	$("#content .next_news").remove();
  $(".article_" + menu_id).animate({ opacity: "show" }, "slow");

}
