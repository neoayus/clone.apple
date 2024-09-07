// TOGGLE VIDEO PLAY BUTTON.
var video = document.querySelector(".hero__background") ;
var toggleMediaButton = document.querySelector(".hero__media-control") ;
var firstBtn = document.querySelectorAll(".hero__media-control i")[0] ;
var secondBtn = document.querySelectorAll(".hero__media-control i")[1] ; 

function togglePlay(event){
   if(video.paused){
      video.play() ; 
      console.log("played") ;
      secondBtn.style.display = 'block' ; 
      firstBtn.style.display = 'none' ; 
   }else{
      video.pause() ; 
      console.log("paused") ;
      secondBtn.style.display = 'none' ; 
      firstBtn.style.display = 'block' ; 
   }   }
// adding event listener on button 
toggleMediaButton.addEventListener("touchstart", togglePlay) ; 