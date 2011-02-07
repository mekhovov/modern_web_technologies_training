/****************************
*  
*  Extension for base.js
*
*  Methods:
*    - requireAll
*    - provideAll
* 
****************************/

goog.requireAll = function(resources) {
  for(i=0; i<resources.length; i++){
    goog.require(resources[i]);
  };  
};

goog.provideAll = function(resources) {
  for(i=0; i<resources.length; i++){
    goog.provide(resources[i]);
  };
};
