/*
 * jQuery Image Slider v0.2
 *
 * Copyright (c) 2010 David Turner
 * Site: http://david,turner.name/
 *
 */

$.fn.imgslide = function(options) {
    
    var defaults = {
    	height: 220
    };
    
    var options = $.extend(defaults, options);
    
    $(this).each(function(){
		var imgsrc = $(this).children(":first-child").attr("src");
		var imgalt = $(this).children(":first-child").attr("alt");
		var imgheight = $(this).children(":first-child").height();
    	$(this).after('<p style="visibility:hidden;line-height:0;margin:0;">.</p>');
		if(imgheight > options.height){
    		$(this).attr({rel : imgsrc+":"+imgheight+":"+imgalt});
    		$(this).children(":first-child").wrap('<p class="wrap"></p>');
    		$(this).children(":first-child").after('<p class="bottom">Click to expand image to full height.</p>');
    		$(this).children(":first-child").before('<span class="caption">'+imgalt+'</span>');
    		$(this).children("p.wrap").addClass("covered");
			$(this).addClass("cursor");
			$(this).addClass("minimal");
		}else{
			$(this).attr({rel : imgsrc+":"+imgheight+":"+imgalt});
			$(this).addClass("fullimg");
			$(this).removeClass("img"); 
    		$(this).children(":first-child").after('<span class="caption">'+imgalt+'</span>');
		}
		
	});
};
	
$.fn.toggleslide = function() {
    $(this).toggle(function() {
    		var resources = $(this).attr("rel").split(":");
		    $(this).children("p.wrap").animate({ 
		        height: resources[1] + 'px'
		      }, 1500 );
		      $(this).children("p.bottom").html("Click to shrink image to smaller size."); 
		      $(this).children("p.bottom").animate({ 
		        top: resources[1] + 'px'
		      }, 1500 , function() {
  });
		}, function() {
    		var resources = $(this).attr("rel").split(":");
		    $(this).children("p.wrap").animate({ 
		        height: '180px'
		      }, 1500 , function() {
				});

		      $(this).children("p.bottom").html("Click to expand image to full height.");
		      $(this).children("p.bottom").animate({ 
		        top: '180px'
		      }, 1500 );
		
		});
};