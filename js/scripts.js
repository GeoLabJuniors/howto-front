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