$(document).ready(function(){

    // Header menu
    $('#openHiddenSerchBox').on('click', function(){
        $(this).addClass('hiddenCloseImg');
        $('#closeHiddenSerchBox').removeClass('hiddenCloseImg');
        $('.hiddensearchBox').removeClass('hiddenForm');
    });

    $('#closeHiddenSerchBox').on('click', function(){
        $(this).addClass('hiddenCloseImg');
        $('#openHiddenSerchBox').removeClass('hiddenCloseImg');
        $('.hiddensearchBox').addClass('hiddenForm');
    });

    // Owl carousel

$('.owl-category').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: false,
    responsive:{
        0:{
            items:2
        },
        360:{
            items:4
        },
        720:{
            items:5
        },
        860:{
            items:6
        }
    }
});

}); // .ready()

var v_1 = document.getElementById('value-1');
var v_2 = document.getElementById('value-2');
var v_3 = document.getElementById('value-3');
var v_4 = document.getElementById('value-4');


var range = document.getElementById('range');

function rangeValue() {
    if ( range.value == 1 ) {
        v_1.innerHTML = 1;
    } else {
        v_1.innerHTML = "";
    };
    if ( range.value == 2 ) {
        v_2.innerHTML = 2;
    } else {
        v_2.innerHTML = "";
    };
    if ( range.value == 3 ) {
        v_3.innerHTML = 3;
    } else {
        v_3.innerHTML = "";
    };
    if ( range.value == 4 ) {
        v_4.innerHTML = 4;
    } else {
        v_4.innerHTML = "";
    };
};

// Fix menu Header
var mainHeader = document.getElementsByClassName('mainHeader')[0];

window.onscroll = function() {
  if(window.pageYOffset >= 95) {
    mainHeader.setAttribute('style','position:fixed;left:0;top:-95px;');
  }

  if(window.pageYOffset >= 500) {
    mainHeader.setAttribute('style','position:fixed;left:0;top:0;z-index:1000;');
  }

  else {
    mainHeader.setAttribute('style','position:initial;left:initial;top:initial;');
  }
}
