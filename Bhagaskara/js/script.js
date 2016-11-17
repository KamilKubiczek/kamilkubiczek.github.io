document.addEventListener('DOMContentLoaded', function(){


// MENU SLIDE

	
    var icons = $('header');
    var menu = $('nav');
   
   

    icons.find('img').on('click',function(e){
        console.log('działa');
        e.preventDefault();
        var href = $(this).attr('href');
        console.log(href);
        var position = $(href).offset();
        console.log(position.top);

        $('html,body').animate({scrollTop: position.top}, 1500);
    })

    menu.find('a').on('click',function(e){
        console.log('działa');
        e.preventDefault();
        var href = $(this).attr('href');
        console.log(href);
        var position = $(href).offset();
        console.log(position.top);

        $('html,body').animate({scrollTop: position.top}, 1500);
    })
    



// STICKY MENU 


$(document).ready(function() {
var stickyNavTop = $('nav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop + 300) { 
    $('nav').addClass('sticky');
} else {
    $('nav').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});


// SKRYPT POJAWIAJĄCY SIĘ

window.sr = ScrollReveal();
/*var header = document.querySelector('.scores_inside');
var header_h1 = header.querySelector('h1');
var header_h2 = header.querySelector('h2');
var header_p = header.querySelector('p');

var icons_inside = document.querySelectorAll('.icons_inside');
var icons_h3 = icons_inside.querySelectorAll('h3');
var icons_p = icons_inside.querySelectorAll('p');*/

// var img = skills.querySelectorAll('img');   
   
    sr.reveal('h2',{
        reset: true,
        delay: 400,
        easing   : 'ease-in-out',
        scale: 1,
        origin: 'bottom',
    });
    sr.reveal('p', {
        reset: true,
        delay: 400,
        easing   : 'ease-in-out',
        scale: 1,
        origin: 'bottom',
    });

     sr.reveal('h6', {
        reset: true,
        delay: 800,
      //  easing   : 'ease-in-out',
        distance: '0',
        scale: 1,
        origin: 'right',
        duration: 1000,
    });


// ANIMACJA WYKRESY

var violet = $('.violet');

$('.graphic_design').find(violet).animate({
            //left: '+=50px',
            float: 'right',
            width: '70%'
        }, 2000);
$('.UL').find(violet).animate({
            //left: '+=50px',
            float: 'right',
            width: '85%'
        }, 2000);
$('.HTML').find(violet).animate({
            //left: '+=50px',
            float: 'right',
            width: '75%'
        }, 2000);
$('.web_design').find(violet).animate({
            //left: '+=50px',
            float: 'right',
            width: '90%'
        }, 2000);





       
       // $(this).find('hr').css('')
   



});