/*
 * jQuery Image Slider v0.4
 *
 * Copyright (c) 2010 David Turner
 * Site: http://davidturner.name/
 *
 */$.fn.imgslide=function(e){var t={height:220,hideDuration:0,toggleDuration:1500,onEnd:jQuery.noop(),onStart:jQuery.noop(),onClick:jQuery.noop()};e=$.extend(t,e);$(this).each(function(){var t=$(this),n=t.children(":first-child").prop("src"),r=t.children(":first-child").prop("alt"),i=t.children(":first-child").height();t.after('<p style="visibility:hidden;line-height:0;margin:0;">.</p>');$.isFunction(e.onStart)&&e.onStart.call(this,t);if(i>e.height){t.prop({"data-height":i});t.children(":first-child").after('<p class="bottom">Click to expand image to full height.</p>').before('<span class="caption">'+r+"</span>").wrap('<p class="wrap"></p>');t.children("p.wrap").addClass("covered").animate({height:e.height+"px"},e.hideDuration);t.addClass("cursor").addClass("minimal")}else t.prop({rel:n+":"+i+":"+r}).addClass("fullimg").removeClass("img").children(":first-child").after('<span class="caption">'+r+"</span>")});$(this).toggle(function(){var t=$(this),n=t.prop("data-height");$.isFunction(e.onClick)&&e.onClick.call(this,t);t.children("p.wrap").animate({height:n+"px"},e.toggleDuration);t.children("p.bottom").html("Click to shrink image to smaller size.").animate({top:n+"px"},e.toggleDuration,$.isFunction(e.onEnd)?e.onEnd:jQuery.noop())},function(){var t=$(this);$.isFunction(e.onClick)&&e.onClick.call(this,t);t.children("p.wrap").animate({height:e.height+"px"},e.toggleDuration,function(){});t.children("p.bottom").html("Click to expand image to full height.").animate({top:e.height+"px"},e.toggleDuration,$.isFunction(e.onEnd)?e.onEnd:jQuery.noop())})};