// TOGGLE VIDEO PLAY BUTTON.
var video = document.querySelector(".hero__background") ;
var toggleMediaButton = document.querySelector(".hero__media-control") ;
var play = document.querySelectorAll(".hero__media-control i")[0] ;
var pause = document.querySelectorAll(".hero__media-control i")[1] ; 

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
// adding event listener on button 
toggleMediaButton.addEventListener("click", togglePlay) ; 

// Action to perform when Hamburger Button is Clicked. 
var hamburgerButton = document.querySelectorAll("i")[3] ; 
var navbar = document.querySelector(".navbar") ;
// event listener to trigger on touch to show menu. 
hamburgerButton.addEventListener("click", ()=>{
   console.log("clicked!") ;
})