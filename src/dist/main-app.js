/*! writing - v0.1.0 - 2012-12-21
* https://github.com/Seven.Guo/writing
* Copyright (c) 2012 Seven.Guo; Licensed MIT */


define('src/module/add.js',[],function(){
	return function(a, b){
		return a + b;
	}
});
define('src/module/sub.js',[],function(){
	return function(a, b){
		return a - b;
	}
});
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