/****************************
*  
*  News views
*  
*    - show 		 : show all news
*    - showFull  : show one news with full content
*    - showCount : add count data to element ".news_count"
*
****************************/

var viewNews = {
	// show all news
	show: function (news, limit, offset) {
    if (offset && offset == limit) {
      $("#content .article_all_news").remove();
    }
    $("#content .next_news").remove();
	  for(var i=0;i<news.length;i++){
      $("#content").append(""
                            + "<article class='article_all_news'>"
                            + "  <header class='title'>"
                            + "    <h3><a href='#' onclick=\"modelNews.getOne('" + news[i].id + "')\"; >" + news[i].title + "</a><div class='date'>"  + news[i].date + "</div></h3>"
                            + "  </header>"
                            + "    <div class='article_content cuttted_content'>"
                            + "      <p>" + cutText(news[i].content) + "</p>"
                            + "    </div>"
                            + "    <span class='post_category'>" + news[i].cat_id + " TODO: add category</span>"
                            + "    <span class='post_author'><a href='#'>" + news[i].author + "</a></span>"
                            + "    <span class='post_tags'><a href='#'>TODO: add tags</a></span>"
                            + "    <span class='post_comments'>" + news[i].id + "</span>"
                            + "    <span class='read_it' onclick=\"modelNews.getOne('" + news[i].id + "')\"; >read more  </span>"
                            + "    <span class='edit_it' onclick=\"modelNews.editOne('" + news[i].id + "')\"; ></span>"
                            + "    <span class='delete_it' onclick=\"modelNews.deleteOne('" + news[i].id + "')\"; ></span>"
                            + "</article>"
    	  	    	  			  );
      $("#content .article_all_news").last().hide().animate({ opacity: "show" }, "slow");
    };
    modelNews.count();
    if (offset < parseInt($(".news_count").text())) {
      $("#content").append("<div class='next_news' onclick='modelNews.getAll(" + limit + ", " + offset + ");'>next " + limit +" news</div>").fadeIn();
    }
  },
  // show one news with full content
  showFull: function (news) {
    $("#content .article_all_news").remove();
    $("#content").append(""
                            + "<article class='article_all_news'>"
                            + "<header  class='red_title'>"
                            + "<img class='article-left' src='images/nav-left.png'/><img class='article-right' src='images/nav-right.png'/>"
                            + "<h3><a href='#' onclick=\"modelNews.getOne('" + news.id + "')\";>" + news.title + "</a><div class='date'>" + news.date + "</div></h3>"
                            + "</header>"
                            + "<div class='article_content two_column'>"
                            + "<p>" + news.content + "</p>"
                            + "</div>"
                            + "<span class='post_category'>" + news.cat_id + " TODO: add category</span>"
                            + "<span class='post_author'><a href='#'>" + news.author + "</a></span>"
                            + "<span class='post_tags'><a href='#'>TODO: add tags</a></span>"
                            + "<span class='post_comments'>" + news.id + "</span>"
                            + "<span class='read_it' onclick=\"show_menu('all_news', 'all_news');\">all news </span>"
                            + "<span class='edit_it' onclick=\"modelNews.editOne('" + news.id + "')\"; ></span>"
                            + "<span class='delete_it' onclick=\"modelNews.deleteOne('" + news.id + "')\"; ></span>"
                            + "</article>"
    		    	  			  );
    $("#content .article_all_news").hide().animate({ opacity: "show" }, "slow");
    $("#content .next_news").remove();
  },
  // add count data to element ".news_count"
  showCount: function (count) {
    $(".news_count").text(count);
  }
  	
};