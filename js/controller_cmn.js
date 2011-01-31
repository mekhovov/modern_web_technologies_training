/****************************
*  
*  Common Controller
*
*  Methods:
*    - show_menu : Show elements corresponding to menu (article, aside, nav ...). Set it active.
*                  Get data from corresponding table
* 
****************************/

function show_menu (menu_id, action) {
	// show / hide / set active elements
  $("article,aside").hide();
  $(".curr_menu").removeClass("curr_menu");
  $(".menu_" + menu_id).addClass("curr_menu");
  $(".curr_sidebar").removeClass("curr_sidebar");
  $(".aside_" + menu_id).addClass("curr_sidebar");
	$("#content .next_news").remove();
  $(".article_" + menu_id).animate({ opacity: "show" }, "slow");

  // Get data from table and show it
  switch(menu_id) {
    case "home": 								// TODO: do something in home
      modelNews.count();			
      break;
    case "all_news":
      modelNews.getAll(2, 0);
      break;
    case "add_news":
      view.showFormAddNews();
      break;
    case "all_tags": 						// TODO: get news by tag
      modelTags.getAll();
      break;
    case "skeleton":
      switch(action) {
        case "lets_rock":
          lets_rock ();
          break;
        default:
          drag_n_drop ();
      }
      break;
      
  }
}

  

$(document).ready(function() {
  
  // open DB anf initialize tables
  dbHW.openDB("hwww04", "1.0", "dDB for Home Work 04", 5*1024*1024);
  dbHW.initializeTables();

  // show by default
  show_menu("home");
  

});

