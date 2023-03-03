// window.addEventListener("scroll", function () {
//   let navbar = document.querySelector(".navbar");
//   navbar.classList.toggle(".stick", window.scrollY > 0);
// });

let navBar =document.querySelector(".navbar");
window.addEventListener("scroll",function(){
  navBar.classList.toggle("active",window.scrollY > 0)
}); 

VanillaTilt.init(document.querySelector(".book-1"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelector(".book-2"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelector(".book-3"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelector(".book-4"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelector(".book-5"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelector(".book-6"), {
  max: 25,
  speed: 400,
});

// slider testimonial
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

// scrollto top
let btn = document.querySelector(".btn-top")

window.onscroll = function(){
  if(window.scrollY >=600){
    btn.style.display ="block"
  }else{
    btn.style.display = "none"
  }
}
btn.onclick = function(){
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'
  });
}

// parallax

const parallax = document.querySelector(".footer");

parallax.addEventListener("scroll",function(){
  let offSet =window.pageYOffset;
  parallax.style.backgroundPositionY= offSet * 0.2 + "px";
})
// navbar for phone
