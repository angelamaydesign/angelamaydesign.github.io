function setHeight() {
  // var height = $(window).css("height");
  var height = document.body.clientHeight;
  // console.log(height)
  // thirtypc = parseInt(height) + 'px';
  $(".section").css('height', height);
}

$(document).ready(function() {
  // $(window).bind('resize', setHeight);
});
