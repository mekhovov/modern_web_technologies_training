/****************************
*  
*  News views
*  
*    - show 		 : show all news
*    - showFull  : show one news with full content
*    - showCount : add count data to element ".news_count"
*    - showFormAddNews
*    - showFormEditNews
*
****************************/

goog.provideAll (['view.viewNews']);
goog.requireAll (['cmn.cutText']);

var viewNews = {
	// show all news
	show: function (news, limit, offset) {
		window.newsModel.count();
    if (offset && offset == limit) {
      $("#content .article_all_news").remove();
    }
    $("#content .next_news").remove();
	  for(var i=0;i<news.length;i++){
      $("#content").append(""
                            + "<article class='article_all_news'>"
                            + "  <header class='title'>"
                            + "    <h3><a href='#news/show/" + news[i].id + "'>" + news[i].title + "</a><div class='date'>"  + news[i].date + "</div></h3>"
                            + "  </header>"
                            + "    <div class='article_content cuttted_content'>"
                            + "      <p>" + cutText(news[i].content) + "</p>"
                            + "    </div>"
                            + "    <span class='post_category'>" + news[i].cat_id + " TODO: add category</span>"
                            + "    <span class='post_author'><a href='#'>" + news[i].author + "</a></span>"
                            + "    <span class='post_tags'><a href='#'>TODO: add tags</a></span>"
                            + "    <span class='post_comments'>" + news[i].id + "</span>"
                            + "    <a href='#news/show/" + news[i].id + "'><span class='read_it'>read more</span></a>"
                            + "    <a href='#news/edit/" + news[i].id + "'><span class='edit_it'></span></a>"
                            + "    <a href='#news/delete/" + news[i].id + "'><span class='delete_it'></span></a>"
                            + "</article>"
    	  	    	  			  );
      $("#content .article_all_news").last().hide().animate({ opacity: "show" }, "slow");
    };

    if (offset < sessionStorage.news_count) {
      $("#content").append("<div class='next_news' onclick='window.newsModel.getAll(" + limit + ", " + offset + ");'>next " + limit +" of " + sessionStorage.getItem('news_count') +" news </div>").fadeIn();
    }
  },
  // show one news with full content
  showFull: function (news) {
    $("#content .article_all_news").remove();
    $("#content").append(""
                            + "<article class='article_all_news'>"
                            + "<header  class='red_title'>"
                            + "<img class='article-left' src='images/nav-left.png'/><img class='article-right' src='images/nav-right.png'/>"
                            + "<h3>" + news.title + "<div class='date'>" + news.date + "</div></h3>"
                            + "</header>"
                            + "<div class='article_content two_column'>"
                            + "<p>" + news.content + "</p>"
                            + "</div>"
                            + "<span class='post_category'>" + news.cat_id + " TODO: add category</span>"
                            + "<span class='post_author'><a href='#'>" + news.author + "</a></span>"
                            + "<span class='post_tags'><a href='#'>TODO: add tags</a></span>"
                            + "<span class='post_comments'>" + news.id + "</span>"
                            + "<a href='#news'><span class='read_it'>all news</span></a>"
                            + "<a href='#news/edit/" + news.id + "'><span class='edit_it'></span></a>"
                            + "<a href='#news/delete/" + news.id + "'><span class='delete_it'></span></a>"
                            + "</article>"
    		    	  			  );
    $("#content .article_all_news").hide().animate({ opacity: "show" }, "slow");
    $("#content .next_news").remove();
  },
  // add count data to element ".news_count"				// TODO: not needed yet?
  showCount: function (count) {
    $(".news_count").text(count);
  },
  showAddNewsForm: function () {
		$("#form_add_news").remove();
		$("#content .next_news").remove();
		$("#content .article_add_news").remove();
		$("#content").append(''
		 + '<article class="article_add_news">'
     + '<header class="title">'
     + '           <h3>Add News</h3>'
     + '    </header>'
      + ' <div class="article_content"> '
      + '           <form id="form_add_news"> '
      + '          <fieldset> '
      + '                       '
      + '                      <ol> '
      + '                          <li> '
      + '                              <label for="author">Name</label> '
      + '                              <input type="text" id="author" name="author" pattern=".{4,}" placeholder="Your name" required /> '
      + '                              <p class="validation01"> '
      + '                                  <span class="invalid">At least 4 characters</span> '
      + '                                  <span class="valid">nice to meet you</span> '
      + '                              </p> '
      + '                          </li> '
      + '                          <li> '
      + '                              <label for="title">Title</label> '
      + '                              <input type="text" id="title" name="title" pattern=".{6,}" placeholder="News title" required /> '
      + '                              <p class="validation01"> '
      + '                                  <span class="invalid">At least 6 characters</span> '
      + '                                  <span class="valid">cool ;)</span> '
      + '                              </p> '
      + '                          </li> '
      + '                          <li> '
      + '                                              <label for="cat_id">Category</label> '
      + '                                              <select name="cat_id" id="cat_id"> '
      + '                                              		<option selected>Other</option> '
      + '                                                  <option>HTML</option> '
      + '                                                  <option>CSS</option> '
      + '                                                  <option>JavaScript</option> '
      + '                                                  <option>Ruby</option> '
      + '                                              </select> '
      + '                                          </li> '
      + '                          <li> '
      + '                              <label for="tags">Tags</label> '
      + '                              <input type="text" id="tags" name="tags" placeholder="e.g. html, css" required /> '
      + '                              <p class="validation01"> '
      + '                                  <span class="invalid">Separator: ","</span> '
      + '                                  <span class="valid">nice :)</span> '
      + '                              </p> '
      + '                          </li> '
			+ '														<li> '
      + '                              <label for="news_content">Content</label> '
      + '                              <textarea id="news_content" name="content" placeholder="Your news" rows="10" required ></textarea> '
      + '                               <p class="validation01"> '
      + '                                  <span class="invalid">Type your news</span> '
      + '                                  <span class="valid">mmm.. interesting</span> '
      + '                              </p> '
      + '                          </li> '
      + '                      </ol> '
      + '                  </fieldset> '
			+ '								<!-- <input type="submit" value="add" /> --> '
      + '             </form> '
      + '      </div> '
			+ '			<span class="add_it" onclick="newsModel.addNews();">add</span>'
			+ '</article>'
				).hide().animate({ opacity: "show" }, "slow");
		},
  showEditNewsForm: function (news) {
		$("#form_edit_news").remove();
    $("article").hide();
    $("#content .next_news").remove();
		$("#content").append(''
		 + '<article class="article_edit_news">'
     + '<header class="title">'
     + '           <h3>Edit News</h3>'
     + '    </header>'
      + ' <div class="article_content"> '
      + '           <form id="form_edit_news"> '
      + '          <fieldset> '
      + '                       '
      + '                      <ol> '
      + '                          <li> '
      + '                              <label for="author">Name</label> '
      + '                              <input type="text" id="author" name="author" pattern=".{4,}" value="' + news.author + '"  required /> '
      + '                              <p class="validation01"> '
      + '                                  <span class="invalid">At least 4 characters</span> '
      + '                                  <span class="valid">nice to meet you</span> '
      + '                              </p> '
      + '                          </li> '
      + '                          <li> '
      + '                              <label for="title">Title</label> '
      + '                              <input type="text" id="title" name="title" pattern=".{6,}"  value="' + news.title + '"  required /> '
      + '                              <p class="validation01"> '
      + '                                  <span class="invalid">At least 6 characters</span> '
      + '                                  <span class="valid">cool ;)</span> '
      + '                              </p> '
      + '                          </li> '
      + '                          <li> '
      + '                                              <label for="cat_id">Category</label> '
      + '                                              <select name="cat_id" id="cat_id"> '
      + '                                              		<option selected>Other</option> '
      + '                                                  <option>HTML</option> '
      + '                                                  <option>CSS</option> '
      + '                                                  <option>JavaScript</option> '
      + '                                                  <option>Ruby</option> '
      + '                                              </select> '
      + '                                          </li> '
      + '                          <li> '
      + '                              <label for="tags">Tags</label> '
      + '                              <input type="text" id="tags" name="tags" value="' + news.tags + '" required /> '
      + '                              <p class="validation01"> '
      + '                                  <span class="invalid">Separator: ","</span> '
      + '                                  <span class="valid">nice :)</span> '
      + '                              </p> '
      + '                          </li> '
			+ '														<li> '
      + '                              <label for="news_content">Content</label> '
      + '                              <textarea id="news_content" name="content" rows="10" required >' + news.content + '</textarea> '
      + '                               <p class="validation01"> '
      + '                                  <span class="invalid">Type your news</span> '
      + '                                  <span class="valid">mmm.. interesting</span> '
      + '                              </p> '
      + '                          </li> '
      + '                      </ol> '
      + '                  </fieldset> '
			+ '								<!-- <input type="submit" value="add" /> --> '
      + '             </form> '
      + '      </div> '
			+ '			<span class="edit_news" onclick="newsModel.updateNews(\'' + news.id + '\');">edit</span>'
			+ '</article>'
				);
	}
  	
}
