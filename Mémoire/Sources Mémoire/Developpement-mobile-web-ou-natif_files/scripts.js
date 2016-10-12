// Menu Panel

(function ($) {
$(document).ready(function() {
  var delayTimer;
  var restoreTimer;
 
  $("#nav a").mouseenter(function(){
    var $this = $(this);
    var panelId = "#panel-" + this.id;
    $("#nav a").removeClass("active");
    $(this).addClass("active");
   
    delayTimer = window.setTimeout(function(){
      $('#banner .panel').hide();
      $('#banner .panel').removeClass("active");
      $(panelId).show();
     
    }, 200);
 
  }).mouseleave(function(){
    window.clearTimeout(delayTimer);
  });
 
  // Restore current menu and panel
  $(".nav-primary").mouseleave(function(){
    window.clearTimeout(restoreTimer);
    restoreTimer = window.setTimeout(function(){
      $('#banner .panel').hide();
      $('#banner .panel').removeClass("active");
      $('#nav a').removeClass("active");
      $('#banner .panel.current').addClass("active").show();
      $('#nav a.current').addClass("active");
    }, 1500)
  })
  
  $( "</p></div><p>&nbsp;</p><h3>" ).replaceWith( "</p></div><h3>" );  
});
}(jQuery));

// Theme the thumbnails type pager.
Drupal.theme.prototype.viewsJqfxPagerthumbnails = function (classes, idx, slide, settings) {
    var href = '#';
    var srcbullet = 'sites/all/themes/theme613/images/bullet_blue.png';
    return '<div class="' + classes + '"><a href="' + href + '"><img src="' + srcbullet + '" alt="" title=""/></a></div>';
}