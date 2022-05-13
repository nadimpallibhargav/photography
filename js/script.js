// mobile nav toggle 
var navToggle = document.querySelector('.nav_toggle');
var mobileMenu = document.querySelector('header ul');
navToggle.addEventListener('click',function(e){
    mobileMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    e.preventDefault();
});
// mobile nav toggle ends

// header scroll 
window.onscroll = function (){
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60)
    {
        document.querySelector('header').classList.add('navsticky');
    }
    else
    {
        document.querySelector('header').classList.remove('navsticky');
    }
};
// header scroll ends

// Our Work 
var modal = document.querySelector('.ourWork_modal');

var modalClose = document.querySelector('.ourWork_modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('ourWork_thumbnailImage') !== -1) {
      var img = e.target;
      var modalImg = document.querySelector(".ourWork_modalImage");
      modal.style.display = "block";
      modalImg.src = img.src;
   }
});
// Our Work ends

document.querySelector('.ourWork_modal').addEventListener('click',function(){
    this.style.display = "none";
    
   

});
document.querySelector('.ourWork_modalImage').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false; 
});

const sliders = document.querySelectorAll(".slider");
const interval = 2800;
const animDuration = 600;

for (let i = 0; i < sliders.length; ++i) {
    const slider = sliders[i];
    const dots = slider.querySelector(".dots");
    const sliderImgs = slider.querySelectorAll(".img");

    let currImg = 0;
    let prevImg = sliderImgs.length - 1;
    let intrvl;
    let timeout;

    for (let i = 0; i < sliderImgs.length; ++i) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    dot.addEventListener("click", dotClick.bind(null, i), false);
    }

    const allDots = dots.querySelectorAll(".dot");
    allDots[0].classList.add("active-dot");

    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
    animateSlider();
    sliderImgs[0].style.left = "";
    intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);   

    
    function animateSlider(nextImg, right) {
    if (!nextImg)
        nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

    --nextImg;
    sliderImgs[prevImg].style.animationName = "";

    if (!right) {
        sliderImgs[nextImg].style.animationName = "leftNext";
        sliderImgs[currImg].style.animationName = "leftCurr";
    } 
    else {
        sliderImgs[nextImg].style.animationName = "rightNext";
        sliderImgs[currImg].style.animationName = "rightCurr";
    }

    prevImg = currImg;
    currImg = nextImg;

    currDot = allDots[currImg];
    currDot.classList.add("active-dot");
    prevDot = allDots[prevImg];
    prevDot.classList.remove("active-dot");
    }

    
    function dotClick(num) {
    if (num == currImg)
        return false;

    clearTimeout(timeout);
    clearInterval(intrvl);

    if (num > currImg)
        animateSlider(num + 1);
    else
        animateSlider(num + 1, true);

    intrvl = setInterval(animateSlider, interval);
    }
}
