//  toggling video control button on bottom-right corner. 
var video = document.querySelector(".hero__background") ;
var play = document.querySelectorAll(".hero__media-control i")[0] ;
var pause = document.querySelectorAll(".hero__media-control i")[1] ; 
var toggleMediaButton = document.querySelector(".hero__media-control") ;

function togglePlay(event){
   if(video.paused){
      video.play() ; 
      play.classList.remove("hidden"); 
      play.style.display = 'none' ; 
      pause.style.display = 'block' ; 
   }else{
      video.pause() ; 
      play.classList.remove("hidden"); 
      pause.style.display = 'none' ; 
      play.style.display = 'block' ; 
   }   
}

toggleMediaButton.addEventListener("click", togglePlay) ; 

//===========================================================
// Function to handle elements on resize : width < 830px 