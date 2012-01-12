/*
 * jQuery Image Slider v0.4
 *
 * Copyright (c) 2010 David Turner
 * Site: http://davidturner.name/
 *
 */   

$.fn.imgslide = function(options) {

  var defaults = {
    height: 220,
    hideDuration: 0,
    toggleDuration: 1500,
    onEnd: jQuery.noop(),
	onStart: jQuery.noop(),
	onClick: jQuery.noop()
  };
  options = $.extend(defaults, options);
  $(this).each(function(){
    var img = $(this),
        imgsrc = img.children(":first-child").attr("src"),
        imgalt = img.children(":first-child").attr("alt"),
        imgheight = img.children(":first-child").height();
    	img.after('<p style="visibility:hidden;line-height:0;margin:0;">.</p>');

		
		if($.isFunction(options.onStart)){
			options.onStart.call(this,img);
		}
		
    if(imgheight > options.height){
      img.attr({'data-height' : imgheight});
      img.children(":first-child")
        .after('<p class="bottom">Click to expand image to full height.</p>')
        .before('<span class="caption">'+imgalt+'</span>')
        .wrap('<p class="wrap"></p>');
      img.children("p.wrap").addClass("covered").animate({
        height: options.height+'px'
      }, options.hideDuration );
      img.addClass("cursor").addClass("minimal");
    }else{
      img.attr({rel : imgsrc+":"+imgheight+":"+imgalt})
        .addClass("fullimg")
        .removeClass("img")
        .children(":first-child").after('<span class="caption">'+imgalt+'</span>');
    }
  });
  $(this).toggle(function() {
    var img = $(this),
        height = img.attr('data-height');
		if($.isFunction(options.onClick)){
			options.onClick.call(this,img);
		}
		
    img.children("p.wrap").animate({
      height: height + 'px'
    }, options.toggleDuration );
    img.children("p.bottom").html("Click to shrink image to smaller size.").animate({
      top: height + 'px'
    }, options.toggleDuration , $.isFunction(options.onEnd) ? options.onEnd : jQuery.noop());
  }, function() {
    var img = $(this);
	if($.isFunction(options.onClick)){
		options.onClick.call(this,img);
	}

    img.children("p.wrap").animate({
      height: options.height + 'px'
    }, options.toggleDuration , function() {});
    img.children("p.bottom").html("Click to expand image to full height.").animate({
      top: options.height + 'px'
    }, options.toggleDuration , $.isFunction(options.onEnd) ? options.onEnd : jQuery.noop());
  });
};