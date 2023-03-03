var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
// buuton to top
let btn =document.querySelector(".btn-top");

window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
};

btn.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
};
// sticky navbar
let navBar = document.querySelector(".navbar");
window.addEventListener("scroll",function(){
    navBar.classList.toggle("active",window.scrollY > 0)
});