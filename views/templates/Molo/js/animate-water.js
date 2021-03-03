/*global $,jQuery,WOW*/
/*jslint node: true */
/*jshint strict:false */

/*    
    Author          : Mohamed Alaa Abas    
    Author Facebook : https://www.facebook.com/SoftTheme-413907182303490/
    Author Email    : mohamedalaaabas93@gmail.com .
**/
var homepage = $('#homePage'),
    error    = $('.error'),
	width = $(window).width();
if(width <= 767){
	homepage.css('background-image','url("http://via.placeholder.com/1250x950/000")');
}else{
	try {
    	homepage.ripples({
        	resolution : 500,
        	dropRadius : 20,
        	perturbance : 0.04,        
        	imageUrl	: 'http://via.placeholder.com/1250x950/000',
   		}); 
    	homepage.ripples('play');    
    	homepage.ripples('updateSize');
	}
	catch (e) {
		error.show().text(e);
	}
}