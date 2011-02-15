//
// This module contains the routes controller for the assessment web app.
//


goog.provideAll (['controllers.Routes']);

goog.requireAll (['controllers.News', 'controller.drag_n_drop', 'controller.lets_rock']);


controllers.Routes = Backbone.Controller.extend ({
  
	routes: {
    "": "home",
    "news/:action/:id" : "news",
    "news/:action" : "news",
    "news": "news",
    "drag_me" : "dragNdrop",
    "lets_rock" : "lets_rock",
    "desktop" : "extjs_desktop"
    
  },
    home : function () {
  		show_menu("home");
    },
    news : function (action, id) {
      window.newsController = new controllers.News ({ 'action' : action, 'id' : id});
    },
    dragNdrop : function () {
      drag_n_drop ();
    },
    lets_rock : function () {
      lets_rock ();
    },
    extjs_desktop : function () {
  		// TODO: generate template
  		// open DB anf initialize tables
    dbHW.openDB("MWTT2", "1.0", "DB for Modern Web Technilogies Training", 5*1024*1024);
    dbHW.initializeTables();
  		window.newsModel = new ModelNews ();
    }
	
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  // routes: {
  //     "": "home",
  //     "news/add" : "add_news",
  //     "news/show/:id" : "show_news",
  //     "news/edit/:id" : "edit_news",
  //     "news/del/:id" : "del_news",
  //     "news": "all_news",
  //     "drag_me" : "dragNdrop",
  //     "lets_rock" : "lets_rock",
  //     "desktop" : "extjs_desktop"
  //     
  //   },
  //     home : function () {
  //   		show_menu("home");
  //     },
  //     all_news : function () {
  //     	show_menu("all_news");
  //       news.getAll(2, 0);
  //     },
  //     add_news : function () {
  //     	show_menu("add_news");
  //       view.showFormAddNews();
  //     },
  //   
  //     show_news : function (id) {
  //     	show_menu("all_news");
  //       news.getOne(id);
  //     },
  //     edit_news : function (id) {
  //     	show_menu("all_news");
  //       news.editOne(id);
  //     },
  //     del_news : function (id) {
  //       news.deleteOne(id);
  //       show_menu("all_news");
  //     },
  //     dragNdrop : function () {
  //       show_menu('skeleton');
  //       drag_n_drop ();
  //     },
  //     lets_rock : function () {
  //       show_menu('lets_rock');
  //       lets_rock ();
  //     },
  //     extjs_desktop : function () {
  //   		// nothing
  //     }



