var containerWidth = 864;

$(document).ready(function () {	
	
	createGrid(16);
	
	$(document).on('mouseenter','.square',function() {
        //$(this).css('background-color', 'blue');
		$(this).css('background-color', getRandomColor());
    });
		
	$('#button_clear').click(function() {
		//this will turn all of the cell backgrounds white
		//$('.square').css('background-color', 'white');
		
		$('.square').remove();
		
		var numSquares = prompt('How many squares per side?');
		createGrid(numSquares);
	});
	
	function createGrid(numSquares) {
		for (i=0; i<(numSquares*numSquares); i++) {

			var size = (containerWidth/numSquares) - 4; //subtract 4 px because of the border
			var $square = $('<div class="square"></div>');
			$square.height(size);
			$square.width(size);
			$('#container').append($square);
		}
	}
	
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.round(Math.random() * 15)];
		}
		return color;
	};
})