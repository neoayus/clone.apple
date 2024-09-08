// TOGGLE VIDEO PLAY BUTTON.
var video = document.querySelector(".hero__background") ;
var toggleMediaButton = document.querySelector(".hero__media-control") ;
var pause = document.querySelectorAll(".hero__media-control i")[0] ;
var play = document.querySelectorAll(".hero__media-control i")[1] ; 

function togglePlay(event){
   if(video.paused){
      video.play() ; 
      pause.style.display = 'none' ; 
      play.style.display = 'block' ; 
   }else{
      video.pause() ; 
      play.style.display = 'none' ; 
      pause.style.display = 'block' ; 
   }   }
// adding event listener on button 
toggleMediaButton.addEventListener("touch", togglePlay) ; 
toggleMediaButton.addEventListener("click", togglePlay) ; 

// Action to perform when Hamburger Button is Clicked. 
var hamburgerButton