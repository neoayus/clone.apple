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
   var navbar = document.querySelector(".navbar__icons") ; 
   var lastNavBarChild = navbar.lastElementChild ;  

 // creating hamburger button 
   // document.createElement(<i class="fa-solid fa-bars"> </i>) ;  
   let hamburgerButton = document.createElement("i") ;
   hamburgerButton.setAttribute("class","fa-solid fa-bars") ;
   hamburgerButton.classList.add("iicons") ; 

function handleNavbarOnResize(event){
   if(window.innerWidth < 830){
      lastNavBarChild.append(hamburgerButton) ; 
   }
}
window.addEventListener("resize", handleNavbarOnResize) ; 

//===========================================================
// adding event listener on hamburger button: 
var navbar = document.querySelector(".navbar") ;
function expandNavbar(event){
   navbar.classList.add("transit") ; 
   navbar.style.height = '100vh' ; 

 // hiding icons 
   let icons = document.querySelectorAll(".icon") ; 
   for( let icon of icons){
      icon.classList.add("hidden") ;  
   }
   hamburgerButton.classList.add("hidden") ;

 // creating 'X' icon:
   let xMark = document.createElement("i") ;
   xMark.setAttribute("class","fa-solid fa-xmark") ;
   xMark.classList.add("iicons") ; 

 // adding 'X' icon:
   document.querySelector(".navbar").appendChild(xMark) ;
   xMark.style.position = 'absolute' ;
   xMark.style.top = '10px' ;
   xMark.style.right = '-3px' ;

 // feat: making X functional    
   function collapseNavbar(){
      navbar.style.height = '44px' ; 
      for( let icon of icons){
         icon.classList.remove("hidden") ;  
      }
      hamburgerButton.classList.remove("hidden") ;
      xMark.classList.add("hidden");
   }
   xMark.addEventListener("click",collapseNavbar) ;
}

hamburgerButton.addEventListener("click", expandNavbar) ; 