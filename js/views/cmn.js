/****************************
*  
*  Common views
*  
*  Views:
*    - dragNdropInit
*
****************************/

goog.provideAll (['view.view']);

var view = {
	dragNdropInit: function () {
		$("#skeletons_container#skeleton #skeletons_container#frank #skeletons_container#zombie").remove();
		$("#skeletons_container").append(''
			+ '		<!--  Skeleton head, body, hands and foots -->	'
	    + '    <div id="skeleton">'
	    + '    	<div class="head"></div><div class="lhand"></div><div class="body"></div><div class="rhand"></div><div class="lfoot"></div><div class="rfoot"></div>'
      + '  	</div>'
      + '  	<!--  Frank head, body, hands and feet -->	'
      + '  	<div id="frank">'
	    + '    	<div class="head">'
	    + '    		</div><div class="lhand"></div><div class="body"></div><div class="rhand"></div><div class="lfoot"></div><div class="rfoot"></div>'
	    + '  	  </div>'
	    + '  	  <!--  Zombie head, body, hands and feet -->	'
	    + '      <div id="zombie">'
	    + '      	<div class="head"></div><div class="lhand"></div><div class="body"></div><div class="rhand"></div><div class="lfoot"></div><div class="rfoot"></div>'
	    + '      </div>'
	    + '    </div> '
	  );
	}
}

