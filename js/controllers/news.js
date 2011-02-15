/****************************
*  
*  News Controller
*
****************************/

goog.provideAll (['controllers.News']);

goog.requireAll (['db.dbHW', 'model.modelNews', 'controller.show_menu', 'view.viewNews']);


controllers.News = Backbone.Controller.extend ({
	
	initialize : function (params) {

		// open DB anf initialize tables
    dbHW.openDB("MWTT2", "1.0", "DB for Modern Web Technilogies Training", 5*1024*1024);
    dbHW.initializeTables();
    
    window.newsModel = new ModelNews ();
      
    show_menu("all_news");
  
    switch(params.action) {
      case "show":
        this.show (params.id);        break;
      case "add":
        this.add ();                  break;
      case "edit":
        this.edit (params.id);        break;
      case "delete":
        this.delete (params.id);      break;
      default:
        this.index ();
	  };
		  
  },
  index : function () {
  	show_menu("all_news");
  	newsModel.getAll(2, 0);
  },
  show : function (id) {
  	newsModel.getOne(id);
  },
  add : function () {
  	show_menu("add_news");
    viewNews.showAddNewsForm();
  },
  edit : function (id) {
  	newsModel.editOne(id);
  },
  delete : function (id) {
  	newsModel.deleteOne(id);
  }
	
});