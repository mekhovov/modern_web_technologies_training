
Ext.onReady(function(){
    
  // initialize blank image. Path to the blank image must point to a valid location on your server
  Ext.BLANK_IMAGE_URL = 'extjs/images/s.gif';
  
  // Stylesheet Switcher
  Ext.get('styleswitcher_select').on('change',function(e,select){
    var name = select[select.selectedIndex].value;
    setActiveStyleSheet(name);
  });
    
  Ext.get('styleswitcher_select').dom.value="win7";

});


// msgbox demo
function msgbox_demo () {
  Ext.Msg.show({
    title: 'Msgbox Demo',
    msg: 'Do you want see news?',
    minWidth: 500, 
    buttons: {
      yes: true,
      no: true,
      cancel: true
    },
    icon: 'msgbox-demo',
    fn: function(btn) {
      switch(btn){
        case 'yes':
          Ext.Msg.prompt('News', 'How many?', function(btn,txt) {
            showNewsWindow(txt);
          });
          break;
        case 'no':
          Ext.Msg.alert('News','You are happy man!');
          break;
        case 'cancel':
          Ext.Msg.wait('Format C:','Disk format');
          break;
      }
    }
  });
}

// Show windows with news
function showNewsWindow(news_count){
  if(!win){
    var win = new Ext.Window({
      minWidth:500,
      minHeight:400,
      title: 'News Window',
      html:'<section id="content"></section>',
      bodyStyle:{'background': 'url("images/background.png") repeat'},
      resizable: true,                
      collapsible: true,             
      minimizable: true,             
      maximizable:true                
    })      
  }
  news_count = news_count || 2;
  window.newsModel.getAll(news_count, 0);
  win.show();
}

// Add news form
function addNews_win(){
  var addNews_form;
  if(!addNews_form){
    
    var categories = new Ext.data.SimpleStore({
      fields: ['id', 'category'],
      data  : [['1','Other'],['2','HTML'],['3','CSS'],['4','JavaScript'],['5','Ruby']]
    });
    
    addNews_form = new Ext.Window({
      width:600,
      height:350,
      layout: 'fit',
      bodyStyle:{'background-color': '#FFFFFF'},
      title:'Add news',
      modal: true,
      xtype:'fieldset',
      title:'Add News',
      layout:'fit',
      items:[{
        xtype: 'form',
        bodyStyle: {padding: '10px'},
        items:[{ 
          xtype:'textfield', 
          fieldLabel:'Author',
          id:'author',
          allowBlank: false,
        },
        {       
          xtype:'textfield',
          fieldLabel: 'Title',
          id:'title',
          allowBlank: false
        }, 
        {       
          xtype:'combo',
          fieldLabel: 'Category',
          id:'category',
          mode: 'local',
          store: categories,
          displayField:'category'
        },
        {       
          xtype:'textfield',
          fieldLabel: 'Tags',
          id:'tags',
          allowBlank: false
        },
        {                                
          xtype:'htmleditor',
          id: 'news_content',
          hideLabel: true,
          labelSeparator: '',
          height: 140,
          anchor: '100%',
          allowBlank: false
        }]
      }],
      buttons:[{
        text:'add',
        id:'buttonOK',
        handler:function(){
          jsonAddNewNews = {
            "addRow" :
              [
                { "table" : window.newsModel.table, "values": 
                  [
                    { "name" : "title",   "value": Ext.getCmp('title').getValue() },
                    { "name" : "author",  "value": Ext.getCmp('author').getValue() },
                    { "name" : "cat_id",  "value": Ext.getCmp('category').getValue() },
                    { "name" : "content", "value": Ext.getCmp('news_content').getValue().replace(new RegExp("\"",'g'),"'") },
                    { "name" : "date",    "value": getDateTime () }
                  ]
                }
              ]
            };
          
          var msg = Ext.Msg;
          msg.minWidth = 300; 
          msg.alert('News added: ', Ext.getCmp('title').getValue() , 
            function(){
              window.newsModel.addNews(jsonAddNewNews);
              
              var win = new Ext.Window({
                width:700,
                minHeight:200,
                title: Ext.getCmp('title').getValue(),
                html: '<div>'
                      + "    <span class='post_category'>" + Ext.getCmp('category').getValue() + "</span>"
                      + "    <span class='post_author'><a href='#'>" + Ext.getCmp('author').getValue() + "</a></span>"
                      + "    <span class='post_comments'>" + sessionStorage.count + "</span>"
                      +'</div><br>'
                      +'<div class="h5"><br>' + Ext.getCmp('news_content').getValue() + '<br></div>' ,
                bodyStyle:{'background': 'url("images/background.png") repeat'},
                resizable: true,                
                collapsible: true,             
                minimizable: true,             
                maximizable: false                
              });
              
              win.show();
              
              addNews_form.close();        
            }
          );
        }
      },
      {
        text: 'cancel',
        handler: function(){
          addNews_form.close();        
        }
      }]
    });
  }
  
  addNews_form.show();
}


// show news in windows
function showNews_win(){
	
  dbHW.selectAll(window.newsModel.table, true, false, false, function(result){
    var news = new Array();
    for(var i=0;i<result.rows.length;i++){
      news.push( {
        id: result.rows.item(i).id,
        title: result.rows.item(i).title,
        author: result.rows.item(i).author,
        cat_id: result.rows.item(i).cat_id,
        date: result.rows.item(i).date,
        content: result.rows.item(i).content
      });
    }
    
    for(var i=0;i<news.length;i++){
      var win = new Ext.Window({
        width:700,
        minHeight:200,
        x: i*50 + 80,
        y: i*50,
        title: news[i].title,
        html: '<div>'
            + "    <span class='post_category'>" + news[i].cat_id + "</span>"
            + "    <span class='post_author'><a href='#'>" + news[i].author + "</a></span>"
            + "    <span class='post_comments'>" + news[i].id + "</span>"
            +'</div><br>'
            +'<div class="h5"><br>' + cutText(news[i].content) + '<br></div>' ,
        bodyStyle:{'background': 'url("images/background.png") repeat'},
          resizable: true,                
          collapsible: true,             
          minimizable: true,             
          maximizable: true                
      });
      
      win.show();
      
    }
  });
}

// drag and drop demo
function dragNdrop_win(){
  $("#x-desktop").append('<div id="skeletons_container"></div>');
  drag_n_drop ();
}

// lets`s rock demo
function letsRock_win(){
  $("#skeletons_container").remove();
  $("#x-desktop").append('<div id="skeletons_container"></div>  <div id="lets_rock"> <div id="rock_mp3"> </div> </div>');
  view.dragNdropInit();
  lets_rock ();
}
