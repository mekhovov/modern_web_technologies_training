/****************************
*  
*  DB strucrute
*
* Tables: 
*    - news
*    - categories
*    - news_tags
*    - tags
*
****************************/

var jsonTables= { "createTables" :
  [
    { "table": "news",  "property": 
      [
        { "name": "id",      "type": "INTEGER NOT NULL PRIMARY KEY" },
        { "name": "title",   "type": "varchar(255)" },
        { "name": "author",  "type": "varchar(50)" },
        { "name": "cat_id",  "type": "INTEGER" },
        { "name": "date",    "type": "timestamp" },
        { "name": "content", "type": "TEXT" }
      ]
    },
    { "table": "categories",   "property": 
      [
        { "name": "id",   "type": "INTEGER NOT NULL PRIMARY KEY" },
        { "name": "name", "type": "varchar(50)" }
      ]
    },
    { "table": "news_tags",   "property": 
      [
        { "name": "tag_id",   "type": "INTEGER" },
        { "name": "news_id",  "type": "INTEGER" }
      ]
    },
    { "table": "tags",   "property": 
      [
        { "name": "id",   "type": "INTEGER NOT NULL PRIMARY KEY" },
        { "name": "name", "type": "varchar(50)" }
      ]
    }
  ]
};

