$(function () {
    var okno = $(window);
    var menu = $('#main-nav');

   if (okno.scrollTop() >= 100) {
      menu.addClass('scroll');
   }

   okno.scroll(function () {

      if (okno.scrollTop() >= 100) {
            menu.addClass('scroll');
       } else {
            menu.removeClass('scroll');
        }
  });

    /*Smoth scroll*/

    $(document).on('click', 'a[href^="#"]', function(event) {
       event.preventDefault();
var menuHeight = $('#main-nav').height();
       $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
  });


});

/*Toogle-------------------------------------------------------------------------------------------------------------- */
$(document).ready(function(){
    $(".btn").click(function(){
        $("#div1").toggle(1000);
    });
});


function wyslij(){
    var pokazDiva=document.getElementById('pokaz')  
    document.getElementById('pokaz').style="display:block"
}

document.getElementById('button1').addEventListener('click',wyslij)


/*Popup*******************************************************************************************************************************8*/

function popUp1(){
    var baner=document.getElementById('popup')
    baner.style='display:none'
    }
document.getElementById('hidepop').addEventListener('click',popUp1)
