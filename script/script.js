
var video = document.querySelector("#video"),
    button = document.querySelector("button");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".main-video-play-btn").click(function() {
  $(".main-video-play-btn").addClass('main-video-play-btn--hide');
})