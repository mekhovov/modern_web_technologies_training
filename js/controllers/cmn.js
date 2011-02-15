/****************************
*  
*  Common Controller
*
****************************/

goog.requireAll (['controllers.Routes']);

$(document).ready(function() {
  
  var routes = new controllers.Routes();
  Backbone.history.start();
  
});
