var price_min = document.querySelector('.price_min'),
	price_max = document.querySelector('.price_max'),
	price_min_text = price_min.querySelector('label'),
	price_max_text = price_max.querySelector('label'),
	price_bar = document.querySelector('.price_bar'),
	price_min_input = price_min.querySelector('input'),
	price_max_input = price_max.querySelector('input'),
	price_min_position = getComputedStyle(price_min).left,
	price_max_position = getComputedStyle(price_max).left,
	price_min_amount = price_min.style.left.slice(0,price_min.style.left.length - 2),
	price_max_amount = price_max.style.left.slice(0,price_max.style.left.length - 2);

	var i = 45;

	price_min.style.left = price_min_position;
	price_max.style.left = price_max_position;



	filter_render = function() {

		price_min_amount = +price_min.style.left.slice(0,price_min.style.left.length - 2),
		price_max_amount = +price_max.style.left.slice(0,price_max.style.left.length - 2);



		price_min_text.innerHTML = 'от ' + Math.round(price_min_amount)*25;
		price_max_text.innerHTML = 'до ' + Math.round(price_max_amount)*25;

		price_bar.style.left = price_min.style.left;
		price_bar.style.width = price_max_amount - price_min_amount + 'px';

		price_min_input.value = Math.round(price_min_amount)*25;
		price_max_input.value = Math.round(price_max_amount)*25;
	};

	filter_mouse = function(e) {



		if (e.pageX - toggle_elem.offsetWidth > 400 || e.pageX - toggle_elem.offsetWidth < 200) {
			return;
		}



		if (price_max_amount - price_min_amount < i) {
			//price_min.style.left = price_min_amount - 1 + 'px';

			//price_max.style.left = price_max_amount + 1 + 'px';
			console.log('raznica = ' + (price_max_amount - price_min_amount));
			console.log('i= ' + i);
			i -= 1;

			filter_render();


			return;
		}

		i = 45;

		moved_elem.style.left = e.pageX - toggle_elem.offsetWidth - 200  + 'px';
		filter_render();
	};

	filter_move = function(e) {
		if (e.target.className !== 'price_toggle') {
			return;
		}
		toggle_elem = e.target;
		moved_elem = e.target.parentNode;

		console.log('HELLO');

		document.addEventListener('mousemove', filter_mouse);
		document.addEventListener('mouseup', function() {
			document.removeEventListener('mousemove', filter_mouse);
		});


	};

	filter_render();

	document.body.addEventListener('mousedown', filter_move);



