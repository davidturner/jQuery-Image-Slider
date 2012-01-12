#jQuery Image Slider

The jQuery Image Slider is a piece of jQuery code I produced during the second year of my [IMD Course](http://imdweb.infj.ulst.ac.uk/). It came about because whilst I wanted to make use of large images, it was typically frowned upon as being used for 'filler' on the site. To that end I came up with a method to load in large images whilst not showing the full piece to the user until they decided to view it.

Whilst it started out as a very rough and ready (and admittedly sloppy) piece of code, I have cleaned it up somewhat and made sure that it works in as flexible a manner as possible. This is something I intend to continue in the future.

## Version

v0.5 - added some method of plugin jquery.  
v0.4 - Cleaned up performance of code.   
v0.3 - Improved functionality of plugin, made it easier to use, and started making use of the HTML5 ability to use data- to create custom attributes to HTML elements.  
v0.2 - Added support for other elements than div (mainly for support of the html5 figure element) [released on web & github]  
v0.1 - Converted from raw jQuery to a jQuery Plugin [released on web]  
v0.0 - Basic Functionality for personal use  

 * * * 
 
## How to use:
 
1. Download jQuery-Image-Slider from github.
2. Query a element like ` $(".img")` and call a plugin jquery like this: `$(".img").imgslide();`.

## Callbacks:
 
**onStart** it's called when the plugin is initialize.  
**onClick** it's called when slide is click to animated, this is called before animated.  
**onEnd** it's called when the animation is finished.  

## Configuration

* hideDuration [default: 220]  
* hideDuration [default: 0]
* toggleDuration [default: 1500(1,5s)]

 