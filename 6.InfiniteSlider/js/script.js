$(function(){
	console.log('DOM!');

	function slider() {
		var next = $('#nextPicture');
		var prev = $('#prevPicture');

		//elementy
		var slider = $('.slider');
		var ul = slider.find('ul');
		var li = slider.find('li');

		var index = 0;
		var widthLi = li.first().width();

		var first = li.first().clone();
		var last = li.last().clone();

		ul.append(first).prepend(last); 
		ul.css('left', -widthLi)
		//console.log(li.length);

		ul.width((li.length+2)*widthLi);

		next.on('click', function(){
			++index;
			ul.animate({left: -(widthLi*index)},
				function(){
					if(li.length < index) {
						index = 1;
						ul.css('left', '-400px');
					}
				})
			console.log('next')
		})

		
	}
slider();

})