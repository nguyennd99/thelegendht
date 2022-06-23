var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}
//  Wrapper
var Lslide      = document.querySelectorAll('.Lslide'),
    Rslide      = document.querySelectorAll('.Rslide'),
    control     = document.querySelectorAll('.oncontrol'),
    slideHeight = document.querySelector('.js-wrapper').clientHeight,
    color = ['#fdc97c', '#87ceeb', '#ffe2c5', '#D3D3D3', '#BADEFF'],
    index = 0;


function init() {
    slideHeight = document.querySelector('.wrapper').clientHeight;
    for (i = 0; i < Lslide.length; i++) {
        Lslide[i].style.backgroundColor = color[i];
        Lslide[i].style.top = -slideHeight * i + "px";
        Rslide[i].style.top = slideHeight * i + "px";
    }  
}
init()
window.addEventListener('resize', function(){
    init()
});

function moveToTop() {

    index++;
    for (el = 0; el < Lslide.length; el++) {
        Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight + "px";
        Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight + "px";
    }

    if (index > Lslide.length-1) {
        index = 0;
        for (el = 0; el < Lslide.length; el++) {
            Lslide[el].style.top = -slideHeight * el + "px";
            Rslide[el].style.top = slideHeight * el + "px";
        }
    }
}

function moveToBottom() {
    index--;
    for (el = 0; el < Lslide.length; el++) {
        Lslide[el].style.top = parseInt(Lslide[el].style.top) - slideHeight + "px";
        Rslide[el].style.top = parseInt(Rslide[el].style.top) + slideHeight + "px";
        
    }
    if (index < 0) {
        index = Rslide.length-1;
        for (el = 0; el < Lslide.length; el++) {
            Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight * Lslide.length + "px";
            Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight * Rslide.length + "px";
        }
    }
}

function transition() {
    for (t = 0; t < Lslide.length; t++) {
        Lslide[t].style.transition = "all 0.8s";
        Rslide[t].style.transition = "all 0.8s";
    }
}
  

for (t = 0; t < control.length; t++) {
    control[t].addEventListener("click", function() {

        if (this.classList.contains('control-top')) {
            moveToTop()
        } 
        if (this.classList.contains('control-bottom')) {
            moveToBottom()
        }

        transition()
   
    });
}

// JS chạy khi cuộn con lăn
// var wheeling;
// function mousemouve(e) {

//     clearTimeout(wheeling);
//     e.preventDefault();
//     var e = window.event || e; 
//     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    
//     wheeling = setTimeout(function() {
//         wheeling = undefined;
//         if (delta === 1) {
//             moveToTop()
//         }
//         if (delta === -1) {
//             moveToBottom()
//         }
//     }, 100);

//     transition()
// }

// document.addEventListener("mousewheel", mousemouve);
// document.addEventListener("DOMMouseScroll", mousemouve);