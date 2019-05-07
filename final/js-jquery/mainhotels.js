$(document).ready(function () { "use strict";


//slider
let index = 0;
const slides = $('.lenta li');
$(document).on("click", ".arrow_left", function(){

    SlideLeft();
})
$(document).on("click", ".arrow_right", function(){
    SlideRight();
})
function Slide()
{
    document.querySelector('.lenta').style.left = -index * 100 + "vw";
}
let sliderInterval = setInterval(() => {
    SlideRight();
}, 9000); 
function SlideRight()
{
    index++;
    if(index === slides.length)
    {
        index = 0;
    }

    Slide();
}
function SlideLeft()
{
    index--;
    if(index < 0)
    {
        index = slides.length - 1; 
    }
        
    Slide();
}
document.querySelector('.arrow_left').onmouseover = function()
{
    clearInterval(sliderInterval);
}
document.querySelector('.arrow_right').onmouseover = function()
{
    clearInterval(sliderInterval);
}
document.querySelector('.arrow_left').onmouseout = function()
{
    sliderInterval = setInterval(() => {
        SlideRight();
    }, 9000); 
}

document.querySelector('.arrow_right').onmouseout = function()
{
    sliderInterval = setInterval(() => {
        SlideRight();
    }, 9000); 
}






})


$(document).ready(function () { "use strict";
//find

$(document).on("click", ".menus", function(){
$(".active").removeClass("active")
$(this).children().addClass("active")

let a=$(this).data("id")

$(".HOTELSmenu").each(function(){
   if( $(this).data("id")==a){
    $(".open").removeClass("open")
    $(this).addClass("open")
   }
  });

})
})