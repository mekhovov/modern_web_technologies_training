/****************************
*  
*  Common Controller
*
****************************/

goog.requireAll (['db.dbHW', 'controller.show_menu']);

$(document).ready(function() {
  
  // open DB anf initialize tables
  dbHW.openDB("MWTT2", "1.0", "DB for Modern Web Technilogies Training", 5*1024*1024);
  dbHW.initializeTables();

  // show by default
  show_menu("home");
});
