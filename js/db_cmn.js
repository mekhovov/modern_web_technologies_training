/****************************
*  
*  Common functions for work with LocalStorage DB
*  
*  Methods:
*    - openDB           : 
*    - createTables     : 
*    - createQuery      : 
*    - selectAll        : 
*    - selectAllWhere   : 
*    - selectAllUnion   : 
*    - insertRows       : 
*    - createQueryRow   : 
*    - updateRows       : 
*    - updateQueryRow   : 
*    - updateRows       : 
*    - updateQueryRow   : 
*    - deleteWhere      : 
*    - selectCount      : 
*    - dbExecuteQuery   : 
*    - debug            : 
*    - initializeTables : 
*  
*  Parameters:
*    - debugging   : Debugging Window 
*
****************************/

var dbHW = {
    debugging: false,    // Debugging Window

    openDB: function (name,version,desc,size) {    // Open database
        dbName = name;
        if (window.openDatabase) {
            db = window.openDatabase(name, version, desc, size);
            if (!db){
                debugTxt= ("Failed to open the database on disk.  This is probably because the version was bad or there is not enough space left in this domain's quota");
                this.debug(debugTxt);
            }
        } else{
            debugTxt= ("Couldn't open the database.  Please try with a WebKit nightly with this feature enabled");
            this.debug(debugTxt);
        }
    },

    createTables: function (tbJson) {
        for(i=0;i<tbJson.createTables.length;i++){
            this.createQuery(tbJson.createTables[i]);
        }
    },
    createQuery: function (tbNode){
        var stringQuery = "CREATE TABLE IF NOT EXISTS " + tbNode.table + " (";
        nodeSize = tbNode.property.length -1;

        for(j=0;j<=nodeSize;j++){
            stringQuery += tbNode.property[j].name +" "+ tbNode.property[j].type;
            if(j != nodeSize) {
                stringQuery +=", ";
            }
        }
        stringQuery +=")";
        this.dbExecuteQuery(stringQuery);
    },

    selectAll: function(table, bRevert, limit, offset, fn){
    	//order by t1key limit 1 offset 2
        stringQuery = "SELECT * FROM " + table + (bRevert ? " ORDER BY date DESC " : "")+ (limit ? (" LIMIT " + limit) : "")+ (offset ? (" OFFSET " + offset) : "") ;
        this.dbExecuteQuery(stringQuery, fn);
    },
    selectAllWhere: function(tbJson,fn){
        stringQuery = "SELECT * FROM ";
        tableCount = tbJson.from.length -1;
        for(i=0;i<tbJson.from.length;i++){
            stringQuery += tbJson.from[i].name;
            if(i != tableCount) {
                stringQuery +=", ";
            }
        }
        stringQuery +=" WHERE ";

        whereCount = tbJson.where.length -1;
        for(i=0;i<tbJson.where.length;i++){
            stringQuery += tbJson.where[i].name +" = "+tbJson.where[i].value;
            if(i != whereCount) {
                stringQuery +=" AND ";
            }
        }
        this.dbExecuteQuery(stringQuery, fn);
    },
    selectAllUnion: function(tbJson,user_id,fn){
        stringQuery = "SELECT * FROM " +tbJson.from[0].name +" UNION ALL SELECT * FROM " +tbJson.from[1].name + " WHERE user_id="+user_id;
        this.dbExecuteQuery(stringQuery,fn);
    },

    insertRows: function (tbJson,fn) {
        for(i=0;i<tbJson.addRow.length;i++){
            this.createQueryRow(tbJson.addRow[i],fn);
        }
    },
    createQueryRow: function (tbNode,fn){
        stringQuery = "INSERT INTO " + tbNode.table + " (";
        nodeSize = tbNode.values.length -1;
        for(j=0;j<=nodeSize;j++){
            stringQuery += tbNode.values[j].name;
            if(j != nodeSize) {
                stringQuery +=", ";
            }
        }
        stringQuery +=") VALUES (";
        for(j=0;j<=nodeSize;j++){
            stringQuery += '"'+ tbNode.values[j].value +'"';
            if(j != nodeSize) {
                stringQuery +=", ";
            }
        }
        stringQuery +=")";
        this.dbExecuteQuery(stringQuery,fn);
    },

		
    updateRows: function (tbJson,where) {
        for(i=0;i<tbJson.upRow.length;i++){
            this.updateQueryRow(tbJson.upRow[i],where);
        }
    },
    updateQueryRow: function (tbNode,where){
        stringQuery = "UPDATE " + tbNode.table + " SET "
        nodeSize = tbNode.values.length -1;
        for(j=0;j<=nodeSize;j++){
            stringQuery += tbNode.values[j].name + '=' + tbNode.values[j].value;
            if(j != nodeSize) {
                stringQuery +=", "
            }
        }
        if(where) stringQuery += (" WHERE " + where);
        this.dbExecuteQuery(stringQuery);
    },

    deleteWhere: function(table,where){
        stringQuery = "DELETE FROM " + table + " WHERE " + where;
        this.dbExecuteQuery(stringQuery);
    },
    
    selectCount: function(table, where, fn){
    	stringQuery = "SELECT COUNT(*) FROM " + table + (where ? (" WHERE " + where) : "");
      this.dbExecuteQuery(stringQuery, fn);
    },
    
    dbExecuteQuery: function(stringQuery,fn){
    		var debugTxtRaw = "SQL: " + stringQuery;
    		
        var self = this;
        db.transaction(function(tx) {
            tx.executeSql(stringQuery, [], function(tx,result) {
                if (fn) {fn(result);}
                if(self.debugging){ self.debug("<b><span style='color:green'>success: </span></b>" + debugTxtRaw); }
                
            }, function(tx, error) {
            	if(self.debugging){ self.debug("<b><span style='color:red'>" + error.message + ": </span></b>" + debugTxtRaw); }
            });
        });
       
    },
    debug: function (msg) {
        if(!$("#debugMode")[0]){
					$("body").append("<div style='position:abolute;top:0 !important;left:0 !important;width:100% !important;min-height:100px !important; margin-top:25px;height:300px; overflow:scroll;z-index:1000; display:block; opacity:0.8; font-size: 10px; background:url('../images/20p-black.png') repeat; -webkit-backface-visibility:visible ' id='debugMode'></div>");
				}
				$("#debugMode").append("<div class='debugerror'>"+msg+"</div>");
	  },
	  initializeTables: function () {
	  	// create tables
	  	this.createTables(jsonTables);
			// initialize DB tables categories, tags, news, news_tags if empy
			var self = this;
			this.selectCount("categories", false, function(result){
				if (result.rows.item(0)['COUNT(*)'] == 0) {
					self.insertRows(jsonAddCategories);
				}
			});
			this.selectCount("tags", false, function(result){
				if (result.rows.item(0)['COUNT(*)'] == 0) {
					self.insertRows(jsonAddTags);
				}
			});
			this.selectCount("news", false, function(result){
				if (result.rows.item(0)['COUNT(*)'] == 0) {
					self.insertRows(jsonAddNews);
				}
			});
			this.selectCount("news_tags", false, function(result){
				if (result.rows.item(0)['COUNT(*)'] == 0) {
					self.insertRows(jsonAddTags2News);
				}
			});
		}

}
