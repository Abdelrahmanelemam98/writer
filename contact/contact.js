// button to top
let btn = document.querySelector(".btn-top");

window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display = "block"
    }else{
        btn.style.display="none"
    }
}
btn.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    })
}
// sticky navbar

let navBar = document.querySelector(".navbar");
window.addEventListener("scroll",function(){
    navBar.classList.toggle("active",window.scrollY > 0)
});