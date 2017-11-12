$(document).ready(function(){
	
	/********    all slider     *********/
	
$(".head-slider").owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
	autoplayTimeout:3000,
	smartSpeed:1000,
	pagination:true, 
	dots:true,
    dotsSpeed:1000,
    autoplayHoverPause:false,
	responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	
 });

$(".feture-slider").owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
	autoplayTimeout:3000,
	smartSpeed:1000,
	pagination:true, 
	dots:true,
    dotsSpeed:500,
    autoplayHoverPause:false,
	responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
	
 });
 
 $(".team-slider").owlCarousel({
    loop:true,
    margin:10,
	autoplay:false,
	autoplayTimeout:3000,
	smartSpeed:1000,
	pagination:true, 
	dots:true,
    dotsSpeed:500,
    autoplayHoverPause:false,
	responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
	
 });


 

/*      isotope jqurey      */
 
	var $grid = $('.grid').isotope({
  	
	});

	
	$('.masonry-menu').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
	});




 
 
 
 
 
 
});