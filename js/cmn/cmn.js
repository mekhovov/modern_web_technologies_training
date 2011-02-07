/****************************
*  
*  Common functions
* 
*   - getDateTime : Convert or Get now DateTime to DB format
*   - cutText     : Dirty Cut some text (default 100 chars)
*
****************************/

goog.provideAll (['cmn.getDateTime', 'cmn.cutText']);

/* Convert or Get now DateTime to DB format */
function getDateTime (dt) {
  if(!dt) { var dt = new Date(); }
  return dtstring = dt.getFullYear()
    + '-' + ((dt.getMonth()+1) < 10 ?   ("0" + (dt.getMonth()+1)) : dt.getMonth())
    + '-' + (dt.getDate() < 10 ? ("0" + dt.getDate()) : dt.getDate())
    + ' ' + (dt.getHours() < 10 ? ("0" + dt.getHours()) : dt.getHours())
    + ':' + (dt.getMinutes() < 10 ? ("0" + dt.getMinutes()) : dt.getMinutes())
    + ':' + (dt.getSeconds() < 10 ? ("0" + dt.getSeconds()) : dt.getSeconds())
}

/* Dirty Cut some text (default 100 chars) */
function cutText (text, symbols) {
	symbols = symbols || 100;
  return text.length > symbols ? (text.substring(0, symbols) + " ...") : text;
}