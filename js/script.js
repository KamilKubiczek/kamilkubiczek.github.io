document.addEventListener('DOMContentLoaded', function(){
	/*var x;
$(window).on('scroll', function() {
    x = $(window).scrollTop();
    $('#header').css('background-size', 100 + parseInt(x / 10, 0) + '% ');
});*/

//HAMBURGER MENU 
/*
$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#header").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#header').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});*/


// SHOOTING STAR 

 //$('#sstar').delay(1000).animate({'opacity':1}, 300);
 //var refreshId = setInterval(function() {
function star() {
 $('#sstar').animate({
                    left: '-120px',
                    top: '500px',
                    opacity: '1',
                    reset: true,
                    delay: 600
                   // height: '150px',
                    //width: '150px'
                }, 1000, function () { $(this).removeAttr('style'); });




};
setInterval(function() {
   star();
}, 4300);
//star();
//setInterval(1);
      // Do something every 5 seconds
//}, 1000);


// MENU SLIDE DOWN



    var menu = $('.menu');
    var bottom = $('.bottom_big');
    var bottom2 = $('.bottom_big_2');
    var bottomUp = $('.bottom_big_up');


    menu.find('a').on('click',function(e){
        //console.log('działa');
        e.preventDefault();
        var href = $(this).attr('href');
        console.log(href);
        var position = $(href).offset();
        console.log(position.top);

        $('html,body').animate({scrollTop: position.top}, 1500);
    })

    bottom.find('a').on('click',function(e){
        //console.log('działa');
        e.preventDefault();
        var href = $(this).attr('href');
        console.log(href);
        var position = $(href).offset();
        console.log(position.top);

        $('html,body').animate({scrollTop: position.top}, 1500);
    })

    bottom2.find('a').on('click',function(e){
        //console.log('działa');
        e.preventDefault();
        var href = $(this).attr('href');
        console.log(href);
        var position = $(href).offset();
        console.log(position.top);

        $('html,body').animate({scrollTop: position.top}, 1500);
    })

    bottomUp.find('a').on('click',function(e){
        //console.log('działa');
        e.preventDefault();
        var href = $(this).attr('href');
        console.log(href);
        var position = $(href).offset();
        console.log(position.top);

        $('html,body').animate({scrollTop: position.top}, 1500);
    })


// SKRYPT POJAWIAJĄCY SIĘ

window.sr = ScrollReveal();
var logo = document.querySelector('#section_logo');
var skills = document.querySelectorAll('#skills');
// var img = skills.querySelectorAll('img');   
	sr.reveal('h1', {
        reset: true,
        delay: 200,
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

    sr.reveal('hr', {
        reset: true,
        delay: 600,
        easing   : 'ease-in-out',
        scale: 1,
        origin: 'left',
    });

    sr.reveal(logo, {
        reset: true,
        delay: 800,
      //  easing   : 'ease-in-out',
        distance: '0',
        scale: 1,
        origin: 'right',
        duration: 1000,
    });
/*
    sr.reveal(img, {
        reset: true,
        delay: 200,
      //  easing   : 'ease-in-out',
        distance: '0',
        scale: 1,
        origin: 'right',
        duration: 600,
    });*/

//
$(function(){
    //console.log('DOM!');
    $(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
    

// SLIDER

    function slider() {
        
        //nasze przyciski
        var next = $('#nextPicture');
        var prev = $('#prevPicture');
        
        //wyszukane elementy 
        var slider = $('#slider');
        var ul = slider.find('ul')
        var li = slider.find('li');
        
        var index = 1;
        var widthLi = li.first().width();
        
        var first = li.first().clone();
        var last = li.last().clone();
        
        ul.append(first).prepend(last);
        ul.css('left', -widthLi);
        //console.log(li.length);
        
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
                    index = 3; // tu miales niepotrzebnie 4
                    ul.css('left', -index*widthLi);
                }
            });
        })
    }
    
    slider();

// SKILLS 
/*
var skills = $('.skills');
var img = skills.find('img');
skills.on('mouseover', function(){
    $(this).find('img').css('transform' ,'scale(1.3)');
    $(this).find('img').css('opacity','.2');
    $(this).animate({ 
        background: 'black',
        opacity: '0.7',    
    },100);
   $(this).css('background','black');
   $(this).text('40%');
})
skills.on('mouseout', function(){
    $(this).find('img').css('transform' ,'scale(1)');
    $(this).find('img').css('opacity' ,'1');
    $(this).css('opacity','1');
    $(this).css('background','');
    $(this).text('');
})
*/

// SLIDER BLUR

$('#portfolio').on('mouseenter', function(){

  $(this).find('img').animate({
            //left: '+=50px',
            opacity: '.7',
            transform: 'scale(1.2)'
        }, 500)
       // $(this).find('hr').css('')
    
})
$('#portfolio').on('mouseleave', function(){

  $(this).find('img').animate({
            //left: '+=50px',
            opacity: '1',
            transform: 'scale(1.2)'
        }, 300)
       // $(this).find('hr').css('')
    
})

//STICKY MENU


//$(function(){
var stickyNavTop = $('nav').offset().top;
 var btn = $('.btn-menu');
var menu2 = $('.menu2');
var menu = $('.menu');

var stickyNav = function(){
var scrollTop = $(window).scrollTop();
var width = $(window).width();
//var pix = 550px; 
      
if (scrollTop > stickyNavTop && width > 550 && !btn.hasClass('open')) { 
   // console.log('600')
    btn.css('position','fixed');
    btn.removeClass('hidden-btn');
    btn.css('display','block');
    menu2.addClass('hidden-nav');
    btn.css("margin","0");
    //menu.find('a').css('font-size','5vh');

} else if (width < 550 && !btn.hasClass('open')) { 
  //console.log('500')
    btn.css('position','fixed');
    btn.removeClass('hidden-btn');
    menu2.addClass('hidden-nav');
    btn.css("margin","0");
} else if (btn.hasClass('open')) { 
  console.log('open');
  //menu.css('font-family','gt_walsheim_proultra_light');
    
}else {
    btn.removeClass('sticky');
    btn.css('position','');
    btn.addClass('hidden-btn');
    btn.css('display','none');
    menu2.removeClass('hidden-nav');
    //menu.find('a').css('font-size','4vh');
}


};
 

stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});

//})

// PODREŚLENIE PO NAJECHANIU
/*
    var menu = $('.menu').find('a');
   var menu_hr = menu.find('hr');
    menu.on('mouseover', function(){
        console.log('działa')
        $(this).find('hr').css('opacity','0.7')
        menu_hr.animate({ 
        display: 'block',
        opacity: '1',    
        },3000);
    })
*/

//PODKREŚLENIA

var menu = $('.menu').find('a');
   var menu_hr = menu.find('hr');


 menu.hover(function(){
        $(this).find('hr').animate({
            //left: '+=50px',
            float: 'right',
            width: '100%'
        }, 500).css('float','left')
       // $(this).find('hr').css('')
    }, function(){
        $(this).find('hr').stop().animate({
           // left: '+=50px' ,
          // float: 'right',
            width: '-0'
        }, 300).css('float','right')
       // $(this).find('hr').stop().animate({ "left": "+=50px" }, "slow" );
  });


/* menu.on('mouseenter',function(){
        $(this).find('hr').animate({
            left: '+=50',
            width: '100%'
        }, 500)
  });
  menu.on('mouseleave',function(){
        $(this).find('hr').animate({
            right: '-50px',
            width: '0%'
        }, 500)
  });*/




// PARALLAX 

$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#header").mousemove(function(e){
           // $('#header').animate({
           //     transform: 'scale(1.1)'
           // },1000);
          var pageX = e.pageX - ($(window).width() );
          var pageY = e.pageY - ($(window).height() );
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 150;
          $('#header').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});




/*
    var h1 = $('h1');
    var hr_about = $('#section_text_inside').find('hr');
    h1.on('mouseover', function(){
    	hr_about.css('display', 'block');
    })

$('#section_logo').find('img').show();

*/
});
	
function _btnMenuInit() {
  
     var btn = document.querySelector('.btn-menu'),
         nav = document.querySelector('.menu2'),
         navi = document.querySelector('nav'),
         navUl = document.querySelector('.menu');
         var hrr = navUl.querySelectorAll('hr');
         var sidenav = document.querySelector('.sidenav');

        btn.addEventListener('click', function(){
           //console.log('działa');
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





    
     //test_match_media_with_listener2();



    
     test_match_media_with_listener();
     
    _btnMenuInit();

});