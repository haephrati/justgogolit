
var navbar = document.getElementById('nav');
// var initval =0;

// document.addEventListener('scroll',()=>{
//     if(window.scrollY>200){
//         // console.log(navbar);
//         // navbar.classList.remove('fixed-top');
//         // navbar.classList.remove('fixed-top');
//         navbar.style.display='none';
//         initval = window.scrollY - 50;
//         console.log(initval);
//         console.log(window.scrollY);
//         if(initval - window.scrollY < 0){
//             console.log('up');
//         }

//     }
//     // if(window.scrollY<400){
//     //     navbar.style.display='block';

//     // }
// });

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      // downscroll code
      if(window.scrollY>200){
        navbar.style.display='none';
      }
   } else {
      // upscroll code
      navbar.style.display='block';


   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);