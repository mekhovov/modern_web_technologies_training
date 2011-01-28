/****************************
*  
*  Initialise tables with prepared data in JSON format
* 
*  Migrations:
*    - jsonAddCategories
*    - jsonAddTags
*    - jsonAddNews
*    - jsonAddTags2News
*
****************************/

var jsonAddCategories = {
  "addRow" :
	  [
      {
        "table" : "categories", "values": 
          [ { "name" : "name", "value": "HTML" } ]
	    },
	    {
        "table" : "categories", "values": 
          [ { "name" : "name", "value": "CSS" } ]
	    },
	    {
        "table" : "categories", "values": 
          [ { "name" : "name", "value": "JavaScript" } ]
      },
      {
        "table" : "categories", "values": 
          [ { "name" : "name", "value": "Other" } ]
      }
    ]
  };

var jsonAddTags = {
  "addRow" :
    [
      {
        "table" : "tags", "values": 
          [ { "name" : "name", "value": "HTML5" } ]
	    },
	    {
        "table" : "tags", "values": 
          [ { "name" : "name", "value": "CSS3" } ]
	    },
	    {
        "table" : "tags", "values": 
          [ { "name" : "name", "value": "JS" } ]
	    },
	    {
        "table" : "tags", "values": 
          [ { "name" : "name", "value": "Music" } ]
      }
    ]
  };

var jsonAddNews = {
  "addRow" :
    [
      {
        "table" : "news", "values": 
          [
            { "name" : "title", "value": "Lorem ipsum dolor sit amet" },
	          { "name" : "author", "value": "admin" },
	          { "name" : "cat_id", "value": 1 },
	          { "name" : "date", "value": getDateTime ()},
	          { "name" : "content", "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus quam quis nibh fringilla sit amet consectetur lectus malesuada. Sed nec libero erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nisi, rhoncus ut vestibulum ac, sollicitudin quis lorem. Duis felis dui, vulputate nec adipiscing nec, interdum vel tortor. Sed gravida, erat nec rutrum tincidunt, metus mauris imperdiet nunc, et elementum tortor nunc at eros. Donec malesuada congue molestie. Suspendisse potenti. Vestibulum cursus congue sem et feugiat. Morbi quis elit odio."
            }
          ]
		  },
		  {
        "table" : "news", "values": 
          [
            { "name" : "title", "value": "Morbi quis elit odio" },
	          { "name" : "author", "value": "user" },
	          { "name" : "cat_id", "value": 2 },
	          { "name" : "date", "value": getDateTime () },
	          { "name" : "content", "value": "In this tutorial, we are creating a photo shoot effect with our just-released PhotoShoot jQuery plug-in. With it you can convert a regular div on the page into a photo shooting stage simulating a camera-like feel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus quam quis nibh fringilla sit amet consectetur lectus malesuada. Sed nec libero erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nisi, rhoncus ut vestibulum ac, sollicitudin quis lorem. Duis felis dui, vulputate nec adipiscing nec, interdum vel tortor. Sed gravida, erat nec rutrum tincidunt, metus mauris imperdiet nunc, et elementum tortor nunc at eros. Donec malesuada congue molestie. Suspendisse potenti. Vestibulum cursus congue sem et feugiat. Morbi quis elit odio. "
            }
          ]
	    }
    ]
  };

var jsonAddTags2News = {
  "addRow" :
    [
      {
        "table" : "news_tags", "values": 
          [
            { "name" : "news_id", "value": 1 },
	          { "name" : "tag_id", "value": 1  }
	        ]
	    },
	    {
        "table" : "news_tags", "values": 
          [
            { "name" : "news_id", "value": 1 },
	          { "name" : "tag_id", "value": 2  }
          ]
	    },
	    {
        "table" : "news_tags", "values": 
          [
           { "name" : "news_id", "value": 2 },
           { "name" : "tag_id",  "value": 3 }
          ]
	    }
    ]
  };

