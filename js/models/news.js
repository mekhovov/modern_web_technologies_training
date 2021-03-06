/****************************
*  
*  News model
* 
*   - getAll     : get all news (with limit and offset if needed)
*   - addNews    : add news to DB
*   - getOne     : get news by ID
*   - count      : get count from DB
*   - deleteOne  : delete news by ID
*   - editOne    : edit news
*   - updateNews : update news in DB
*
****************************/

goog.provideAll (['model.modelNews']);
goog.requireAll (['view.viewNews']);

var ModelNews = Backbone.Model.extend({
	table: 'news',	// table name
	// get all news (with limit and offset if needed)
	getAll: function (limit, offset) {
		dbHW.selectAll(this.table, true, limit, offset, function(result){
			var arrObjects = new Array();
      for(var i=0;i<result.rows.length;i++){
        arrObjects.push( {
					id: result.rows.item(i).id,
        	title: result.rows.item(i).title,
          author: result.rows.item(i).author,
          cat_id: result.rows.item(i).cat_id,
          date: result.rows.item(i).date,
          content: result.rows.item(i).content
        } );
    	}
    	sessionStorage.news = result;
    	viewNews.show(arrObjects ,limit, limit+offset );	// show news
		});
	},
	
	// add news to DB
	addNews: function (jsonAddNewNews) {
		var values = {};
		$.each($('#form_add_news').serializeArray(), function(i, field) {
      values[field.name] = field.value;
  	});
		jsonAddNewNews = jsonAddNewNews || {
      "addRow" :
        [
          { "table" : this.table, "values": 
            [
              { "name" : "title",   "value": values.title },
	            { "name" : "author",  "value": values.author },
	            { "name" : "cat_id",  "value": values.cat_id },
	            { "name" : "content", "value": values.content },
	            { "name" : "date",    "value": getDateTime () }
            ]
		      }
        ]
     };
    dbHW.insertRows(jsonAddNewNews);
		if (window.newsController) { 
			window.newsController.index();
		}
	},
	
  // get news by ID
	getOne: function (news_id) {
    var jsonWhere = {
      "from"  : [ { "name" : this.table } ],
      "where" : [ { "name" : "id", "value": news_id } ]
    };
    dbHW.selectAllWhere(jsonWhere, function(result){
	    var news;
      for(var i=0;i<result.rows.length;i++){
        news = {
			  	id: result.rows.item(i).id,
          title: result.rows.item(i).title,
          author: result.rows.item(i).author,
          cat_id: result.rows.item(i).cat_id,
          date: result.rows.item(i).date,
          content: result.rows.item(i).content
        }
    	}
    	viewNews.showFull(news);	// show full news
		});
	},
	
	// get count from DB
  count: function () {
    dbHW.selectCount(this.table, false, function(result){
    	sessionStorage.removeItem("news_count");
	sessionStorage.news_count = result.rows.item(0)['COUNT(*)'];
	  });
  },
	
  // delete news by ID
  deleteOne: function (news_id) {
    dbHW.deleteWhere( this.table, "id == " + news_id);
    window.newsController.index();
	},
	
	// edit news
  editOne: function (news_id) {
    var jsonWhere = {
      "from"  : [ { "name" : this.table } ],
      "where" : [ { "name" : "id", "value": news_id } ]
    };
    dbHW.selectAllWhere(jsonWhere, function(result){
	  var news;
    for(var i=0;i<result.rows.length;i++){
      news = {
				id: result.rows.item(i).id,
        title: result.rows.item(i).title,
        author: result.rows.item(i).author,
        cat_id: result.rows.item(i).cat_id,
        date: result.rows.item(i).date,
        content: result.rows.item(i).content
      }
    }
    viewNews.showEditNewsForm (news);	// show edit news form
		});
	},
	
	// update news in DB
  updateNews: function (news_id) {
    var values = {};
		$.each($('#form_edit_news').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
		var jsonUpRow = {
      "upRow" :
        [ {
            "table" : this.table, "values": 
            [
              { "name" : "title",   "value": "\'" + values.title + "\'" },
	            { "name" : "author",  "value": "\'" + values.author + "\'" },
	            { "name" : "cat_id",  "value": "\'" + values.cat_id + "\'"  },    // TODO: temp
	            { "name" : "content", "value": "\'" + values.content + "\'"	},
	            { "name" : "date",    "value":  "\'" + getDateTime () + "\'" }
            ]
		    } ]
    };
    dbHW.updateRows(jsonUpRow, "id = " + news_id);
    window.newsController.index();
  }
})
