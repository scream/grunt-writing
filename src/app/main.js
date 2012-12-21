require.config({
	"paths" : {
		"jquery" : "../lib/require-jquery",
		"main-app" : "../dist/main-app-min.js"
	}
});
require(["jquery", "add", "sub"], function($, Add, Sub) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
		$('#data').append('Add module is loaded:2+2='+ Add(2,2)+'<br/>')
				  .append('Sub module is loaded:10-1='+ Sub(10,1)+'<br/>');
    });
});