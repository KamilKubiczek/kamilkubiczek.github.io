document.addEventListener('DOMContentLoaded', function(){
	
	var nav = document.querySelector('nav>ul>li');

	//console.log(nav);

	
		nav.addEventListener('mouseover', function(){
			var ul = document.querySelectorAll('.hide>li');
			
			for (var i = 0; i < ul.length; i++) {
				ul[i].style.display = "block";

			};
			
			//console.log(ul);

		
		});

		nav.addEventListener('mouseout', function(){
			var ul = document.querySelectorAll('.hide>li');

			
			for (var i = 0; i < ul.length; i++) {
				ul[i].style.display = "none";
			};
			
			//console.log('wyjście');
				
	});

	var next = document.querySelector("#triangle-left");
	var prev = document.querySelector("#triangle-right");
	var list2 = document.querySelectorAll('.image');

	var index = 0;

	list2[0].classList.add('visible');

	next.addEventListener('click', function(e){
		console.log('działa');
		list2[index].classList.remove("visible");
		index ++; 
		if (index > list2.length -1) {
				index = 0;
			};
		list2[index].classList.add("visible");
			

	})

	prev.addEventListener('click', function(e){
		console.log('działa');
		list2[index].classList.remove("visible");
		index --; 
		if (index < 0) {
				index = list2.length - 1;
			};
		list2[index].classList.add("visible");
		
	})

	var img = document.querySelectorAll(".img_div");

	for (var i = 0; i < img.length; i++) {
		img[i].addEventListener('mouseover', function(){
			var span = this.querySelectorAll('span');
			
			for (var i = 0; i < span.length; i++) {
				span[i].style.display = "none";

			};
	});
		img[i].addEventListener('mouseout', function(){
			var span = this.querySelectorAll('span');
			
			for (var i = 0; i < span.length; i++) {
				span[i].style.display = "";

			};
	});
}

var list = document.querySelectorAll('.drop_down_list');

	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener('click', function(){

			var panel = this.querySelectorAll('.list_panel');
			for (var i = 0; i < panel.length; i++) {
				if (panel[i].style.display !== 'none') {
        			panel[i].style.display = 'none';
    		}
   				 else {
        			panel[i].style.display = 'block';
    		}
				
			};
			
		});

	};




	var list_cash = document.querySelectorAll('.list_panel>li');
	for (var i = 0; i < list_cash.length; i++) {
	
		list_cash[i].addEventListener('click', function(){
		
			if (this.classList == 'list_chair') {
			var title_value = document.querySelector('.title_value');
			var title = document.querySelector('.title');
			var chair_cash = this.dataset.cash;
			title_value.innerText = this.dataset.cash;
			title.innerText = this.innerText;
			var sum = document.querySelector('.sum');
			return sum.innerText = parseInt(this.dataset.cash);
			
		}
		if (this.classList == 'list_color') {
			var title_value = document.querySelector('.color_value');
			var title = document.querySelector('.color');
			var color_cash = this.dataset.cash;
			title_value.innerText = this.dataset.cash;
			title.innerText = this.innerText;
			var sum = document.querySelector('.sum');
			return sum.innerText = parseInt(sum.innerText) + parseInt(this.dataset.cash);
			
		}
		if (this.classList == 'list_pattern') {
			var title_value = document.querySelector('.pattern_value');
			var title = document.querySelector('.pattern');
			var pattern_cash = this.dataset.cash;
			title_value.innerText = this.dataset.cash;
			title.innerText = this.innerText;
			var sum = document.querySelector('.sum');
			return sum.innerText = parseInt(sum.innerText) + parseInt(this.dataset.cash);
			
		}
			
			return;
		});
	};


		var checkbox = document.querySelector('input[type="checkbox"]');
		var check = document.querySelector("#transport");
		
		check.addEventListener('click', function(){
		
			if(check.checked == true) {
		
		var sum = document.querySelector('.sum');
        sum.innerText = parseInt(sum.innerText) + parseInt(this.dataset.price);
        var transport = document.querySelector('.transport');
        var transport2 = document.querySelector('#transport2');
        var transport_value = document.querySelector('.transport_value');
        transport.innerText = transport2.innerText;
        transport_value.innerText = this.dataset.price;

      }
		})
		if(checkbox.checked == true) {
		console.log('działa');
	
      }

      window.sr = ScrollReveal();
    
    sr.reveal('h1', {
        reset: true,
        delay: 200,
        easing   : 'ease-in-out',
        scale: 1,
    });

});