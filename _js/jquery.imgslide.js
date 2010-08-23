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
			$(this).attr({'data-height' : imgheight});                
			$(this).children(":first-child").wrap('<p class="wrap"></p>');
			$(this).children(":first-child").after('<p class="bottom">Click to expand image to full height.</p>');
			$(this).children(":first-child").before('<span class="caption">'+imgalt+'</span>');
			$(this).children("p.wrap").addClass("covered");                                
			//$(this).children("p.wrap").css("height:"+options.height+"px");   
			$(this).children("p.wrap").animate({ 
		    height: options.height+'px'
		  }, 1500 );
			$(this).addClass("cursor");
			$(this).addClass("minimal"); 
		}else{
			$(this).attr({rel : imgsrc+":"+imgheight+":"+imgalt});
			$(this).addClass("fullimg");
			$(this).removeClass("img"); 
			$(this).children(":first-child").after('<span class="caption">'+imgalt+'</span>');
		} 

	});   
	
	$(this).toggle(function() {                          
		var height = $(this).attr('data-height');
		$(this).children("p.wrap").animate({ 
			height: height + 'px'
		}, 1500 );
		$(this).children("p.bottom").html("Click to shrink image to smaller size."); 
		$(this).children("p.bottom").animate({ 
			top: height + 'px'
		}, 1500 , function() {
		});
		}, function() {                                  
			$(this).children("p.wrap").animate({ 
				height: options.height + 'px' 
			}, 1500 , function() {
		});

		$(this).children("p.bottom").html("Click to expand image to full height.");
		$(this).children("p.bottom").animate({ 
			top: options.height + 'px'
		}, 1500 );

	});
};       