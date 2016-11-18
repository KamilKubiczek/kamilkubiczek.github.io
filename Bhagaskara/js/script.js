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
    


// PODWÓJNE KLIKANIE IPHONE

$('.menu').find('a').on('click touchend', function(e) {
    
   // window.location = link;
    btn.removeClass('open');
    $('ul').removeClass('sidenav');
    menu2.addClass('hidden-nav');
        e.preventDefault();
        var el = $(this);
        var link = el.attr('href');
        var position = $(link).offset();
        

        $('html,body').animate({scrollTop: position.top}, 1500);

      if (link == '#portfolio'){
        var data = el.attr('data');
        var position2 = $(data).offset();
        

        $('html,body').animate({scrollTop: position2.top}, 1500);
    }
});



// STICKY MENU 


$(document).ready(function() {
var stickyNavTop = $('nav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop + 300 && $(window).width() > 550) { 
    $('nav').addClass('sticky');
    $('.btn-menu').addClass('sticky');
} else if ( scrollTop > stickyNavTop + 300 && $(window).width() < 550)  { 
    $('nav').removeClass('sticky');
    $('.btn-menu').addClass('sticky');
} else {
    $('nav').removeClass('sticky'); 
    $('.btn-menu').addClass('sticky');
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
   

// HAMBURGER MENU 









/*
var width = $(window).width();
function nav(){
if ( $(window).width() < 550) {
console.log('działa');
$('#nav_text').find('ul').addClass('hidden-nav');
$('#nav_text').find('.btn-menu').removeClass('hidden-btn');



} else  {
console.log('działa2');
$('#nav_text').find('ul').removeClass('hidden-nav');
$('#nav_text').find('.btn-menu').addClass('hidden-btn');



}
}

nav();


$('.btn-menu').on('click', function(){
    $(this).toggleClass('open');
})
*/











function _btnMenuInit() {
  
     var btn = document.querySelector('.btn-menu'),
         nav = document.querySelector('.menu2'),
         navUl = document.querySelector('.menu');

        btn.addEventListener('click', function(){
           //console.log('działa');
           nav.classList.toggle('hidden-nav');
           navUl.classList.toggle('nav-mobile');
        });
 }

function _showBtn(){
    var btn = document.querySelector('.btn-menu');
        btn.classList.remove('hidden-btn');
         
 }

  function _hideBtn(){
    var btn = document.querySelector('.btn-menu');
        btn.classList.add('hidden-btn');
 }

 function _showNav(){
        var nav = document.querySelector('.menu2'),
            navUl = document.querySelector('.menu');

            nav.classList.remove('hidden-nav');
            navUl.classList.remove('nav-mobile');
 }

 function _hideNav(){
        var nav = document.querySelector('.menu2');
            nav.classList.add('hidden-nav');
 }
 

function test_match_media_with_listener(){
    var mq = window.matchMedia("(max-width: 650px)");
    mq.addListener(WidthChange);
    WidthChange(mq);

    function WidthChange(mediaQuery) {
 
        if(mediaQuery.matches) {
              _hideNav();
             _showBtn();
            console.log('yes');
         
        } else {
           _showNav();
            _hideBtn();
            console.log('no');
        }
    }
}



    
     test_match_media_with_listener();
     
    _btnMenuInit();






});