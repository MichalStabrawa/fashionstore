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

var myVar;

function myFunction() {
    myVar = setTimeout(popUp, 3000);
};


function popUp(){
  var popSchowaj=document.getElementById('popup');
  popSchowaj.style="display:block"
};

function popUp1(){
    var baner=document.getElementById('popup')
    baner.style='display:none'
    }
document.getElementById('popNone').addEventListener('click',popUp1)



/*Shop showBasket Function*/

var cennik=[459,350,200]
//basket price function

function basket(){
    var price1=document.getElementById('showBasket1');
    var priceInner1=document.getElementById('innerPrice');
    var numer=document.getElementById('numer').value;
    price1.style="display:block";
    priceInner1.innerHTML="Price" +" " +numer*  cennik[0] + "zl";
    
   
}

document.getElementById('buttonPrice1').addEventListener('click',basket)

function basket1(){
    var price1=document.getElementById('showBasket1');
    var priceInner1=document.getElementById('innerPrice');
    price1.style="display:block";
    priceInner1.innerHTML="Price" +" " + cennik[1] + "zl";
}

document.getElementById('buttonPrice2').addEventListener('click',basket1)

function basket2(){
    var price1=document.getElementById('showBasket1');
    var priceInner1=document.getElementById('innerPrice');
    var szt=document.getElementById('numer').value;
    
    price1.style="display:block";
    priceInner1.innerHTML="Price" +" " + cennik[2] + "zl";
}

document.getElementById('buttonPrice3').addEventListener('click',basket2)

//basket hide function

function basketHide(){
    var basketButton=document.getElementById('showBasket1');
    basketButton.style="displey:none";
}
document.getElementById('basketHide1').addEventListener('click',basketHide)



/*myBtn scrollTop*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


    $('#myBtn').on('click',function(){
    $('body').animate({
        scrollTop: $('.navbar-default').offset().top
    }, 1000);
})





 

