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

    // Fixed menu
    $('#openHiddenSerchBox_fixed').on('click', function(){

        $(this).addClass('hiddenCloseImg_fixed');
        $('#closeHiddenSerchBox_fixed').removeClass('hiddenCloseImg_fixed');
        $('.hiddensearchBox_fixed').removeClass('hiddenForm_fixed');
    });

    $('#closeHiddenSerchBox_fixed').on('click', function(){
        $(this).addClass('hiddenCloseImg_fixed');
        $('#openHiddenSerchBox_fixed').removeClass('hiddenCloseImg_fixed');
        $('.hiddensearchBox_fixed').addClass('hiddenForm_fixed');
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
var fixedHeader = document.getElementById('fixed-header');
var hiddenSearcBoxFixed = document.getElementById('hiddenSearcBox_fixed');

var hiddenSearchBox = document.getElementById('hiddensearchBox');

var searchImg = document.getElementById('closeHiddenSerchBox_fixed');
var closeImg = document.getElementById('openHiddenSerchBox_fixed');

var closeHiddenSerchBox = document.getElementById('closeHiddenSerchBox');
var openHiddenSerchBox = document.getElementById('openHiddenSerchBox');

window.onscroll = function() {

  if(window.pageYOffset >= 400) {
    fixedHeader.classList.add('header-appear');
  } else {
    fixedHeader.classList.remove('header-appear');
  }

  if(window.pageYOffset >= 100){
    hiddenSearcBoxFixed.classList.add('hiddenForm_fixed');
    searchImg.classList.add('hiddenCloseImg_fixed');
    closeImg.classList.remove('hiddenCloseImg_fixed');
  }

  if(window.pageYOffset >= 200+'px' && hiddenSearchBox.className('hiddensearchBox') == 'hiddensearchBox'){

      hiddenSearchBox.classList.add('hiddenForm');
      openHiddenSerchBox.classList.add('hiddenCloseImg');
      closeHiddenSerchBox.classList.remove('hiddenCloseImg');

  }
}
