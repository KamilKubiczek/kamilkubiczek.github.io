document.addEventListener('DOMContentLoaded', function(){



// SHOOTING STAR 

var width = $(window).width();
function star() {
if ( $(window).width() > 550) {
 $('#sstar').animate({
                    left: '-5vw',
                    top: '70vh',
                    opacity: '1',
                    reset: true,
                    delay: 600
                }, 1000, function () { $(this).removeAttr('style'); });
}
};

setInterval(function() {
   star();
}, 3500);





// MENU SLIDE DOWN

 
$('#port').find('a').on('click',function(e){
    if ( $(window).width() < 550) {
       $(this).removeAttr("href");
       $(this).attr("href", "#portfolio2");
    }
})
               
      

var menu = $('.menu');
var bottom = $('.bottom_big');
var bottom2 = $('.bottom_big_2');
var bottomUp = $('.bottom_big_up');


    menu.find('a').on('click',function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var position = $(href).offset();

        $('html,body').animate({scrollTop: position.top}, 1500);
    })
     
         

    bottom.find('a').on('click',function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var position = $(href).offset();

        $('html,body').animate({scrollTop: position.top}, 1500);
    })

    bottom2.find('a').on('click',function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var position = $(href).offset();

        $('html,body').animate({scrollTop: position.top}, 1500);
    })

    bottomUp.find('a').on('click',function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var position = $(href).offset();

        $('html,body').animate({scrollTop: position.top}, 1500);
    })





// SKRYPT POJAWIAJĄCY SIĘ

window.sr = ScrollReveal();
var logo = document.querySelector('#section_logo');
var skills = document.querySelectorAll('#skills');

	sr.reveal('h1', {
        reset: true,
        delay: 200,
        easing: 'ease-in-out',
        scale: 1,
        origin: 'bottom',
    });

	sr.reveal('p', {
        reset: true,
        delay: 400,
        easing: 'ease-in-out',
        scale: 1,
        origin: 'bottom',
    });

    sr.reveal('hr', {
        reset: true,
        delay: 600,
        easing: 'ease-in-out',
        scale: 1,
        origin: 'left',
    });

    sr.reveal(logo, {
        reset: true,
        delay: 800,
        distance: '0',
        scale: 1,
        origin: 'right',
        duration: 1000,
    });

$(function(){
    $(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
    

// SLIDER

    function slider() {
        
        var next = $('#nextPicture');
        var prev = $('#prevPicture');
        
        var slider = $('#slider');
        var ul = slider.find('ul')
        var li = slider.find('li');
        
        var index = 1;
        var widthLi = li.first().innerWidth();
        
        var first = li.first().clone();
        var last = li.last().clone();
        
        ul.append(first).prepend(last);
        ul.css('left', -widthLi);
        
        ul.width((li.length)*widthLi);
        
        next.on('click', function(){
            ++index;
            ul.animate({left: -(widthLi*index)}, function(){
                console.log(li.length, index);
                if(li.length < index) {
                    index = 1;
                    ul.css('left', -index*widthLi);
                }
            });
        })
        prev.on('click', function(){
            --index;
            ul.animate({left: -(widthLi*index)}, function(){
                console.log(li.length, index);
                if(index < 1 ) {
                    index = 3; 
                    ul.css('left', -index*widthLi);
                }
            });
        })
    }
    
    slider();



//STICKY MENU



var stickyNavTop = $('nav').offset().top;
var btn = $('.btn-menu');
var menu2 = $('.menu2');
var menu = $('.menu');

var stickyNav = function(){
var scrollTop = $(window).scrollTop();
var width = $(window).width();

      
if (scrollTop > stickyNavTop && width > 550 && !btn.hasClass('open')) { 

    btn.css('position','fixed');
    btn.removeClass('hidden-btn');
    btn.css('display','block');
    menu2.addClass('hidden-nav');
    btn.css("right","4vw");
    btn.css("margin-top","0");

} else if (width < 550 && !btn.hasClass('open')) { 

    btn.css('position','fixed');
    btn.removeClass('hidden-btn');
    menu2.addClass('hidden-nav');
    btn.css("margin-right","20px");

} else if (btn.hasClass('open')) { 

  console.log('open');
    
}else if (scrollTop > stickyNavTop) { 
  
    btn.css("padding-right","20px");
    btn.css("right","120px");

}else {
    btn.removeClass('sticky');
    btn.css('position','');
    btn.addClass('hidden-btn');
    btn.css('display','none');
    menu2.removeClass('hidden-nav');

}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});


// PODWÓJNE KLIKANIE IPHONE

$('.menu').find('a').on('click touchend', function(e) {
    
    btn.removeClass('open');
    $('ul').removeClass('sidenav');
    menu2.addClass('hidden-nav');
        e.preventDefault();
        var el = $(this);
        var link = el.attr('href');
        var position = $(link).offset();
        

        $('html,body').animate({scrollTop: position.top}, 1500);

      if (link == '#portfolio' && $(window).width() < 550){
        var data = el.attr('data');
        var position2 = $(data).offset();
        

        $('html,body').animate({scrollTop: position2.top}, 1500);
    }
});



// WYŚWIETLANIE SLIDERA W SAFARI
/*if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)  {
//document.addEventListener('load', function(){
 
   $('#portfolio').css('display','none');
   $('#portfolio2').css('display','block');
   $('#portfolio2').css('height','100vh');
   $('#warsztat').css('height','100px');


};*/


//PODKREŚLENIA

var menu = $('.menu').find('a');
   var menu_hr = menu.find('hr');


 menu.hover(function(){
        $(this).find('hr').animate({
            float: 'right',
            width: '100%'
        }, 500).css('float','left')
    }, function(){
        $(this).find('hr').stop().animate({
            width: '-0'
        }, 300).css('float','right')
  });






// PARALLAX 
var width = $(window).width();

$(document).ready(function() {
    
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
if ( $(window).width() > 550   && $(window).width() < 1500) {
$("#header").mousemove(function(e){

          var pageX = e.pageX - ($(window).width() );
          var pageY = e.pageY - ($(window).height() );
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 150;
          $('#header').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
}
});

if ($(window).width() > 1500) {
    $('#header').css('background-size','cover');
};


});
	


// HAMBURGER MENU



function _btnMenuInit() {
  
     var btn = document.querySelector('.btn-menu'),
         nav = document.querySelector('.menu2'),
         navi = document.querySelector('nav'),
         navUl = document.querySelector('.menu');
         var hrr = navUl.querySelectorAll('hr');
         var sidenav = document.querySelector('.sidenav');

        btn.addEventListener('click', function(){
           nav.classList.toggle('hidden-nav');
           navUl.classList.toggle('sidenav');


        });
 }

function _showBtn(){
    var btn = document.querySelector('.btn-menu');
        btn.classList.remove('hidden-btn');
        btn.style.display ='block';
         
 }

  function _hideBtn(){
    var btn = document.querySelector('.btn-menu');
        btn.classList.add('hidden-btn');
        btn.style.display = 'none';
 }

 function _showNav(){
        var nav = document.querySelector('.menu2'),
            navUl = document.querySelector('.menu'),
            sticky = document.querySelector('.sticky'),
            sticky = document.querySelector('.sticky'),
            sticky = document.querySelector('.sticky'),
            navi = document.querySelector('nav');

            nav.classList.remove('hidden-nav');
            navi.classList.remove('sticky');

            navUl.classList.remove('nav-mobile');

 }

 function _hideNav(){
        var nav = document.querySelector('.menu2');
            nav.classList.add('hidden-nav');
 }
 

function test_match_media_with_listener(){
    var mq = window.matchMedia("(max-width: 550px)");
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

function test_match_media_with_listener2(){
    var mq = window.matchMedia("(top: 100px)");
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