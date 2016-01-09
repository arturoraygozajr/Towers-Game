var theTower = "-1";

$(document).ready(init);

function init(){
 $('.tower').on('click', selTopTower);
}

function selTopTower() {

	if (theTower === "-1") {
		$tower = $(this);
		console.log($tower);
		theTower = $tower.find('.press').data('val');
		console.log(theTower);
		$ring = $tower.find('.rings:first-child');
		console.log($ring)
		
	} else {
		$tower1 = $(this);
		console.log($tower1);
		$ring1 = $tower1.find('.rings:first-child');
		console.log($ring1);
	
		if ($tower1.find('.rings').length === 0 || $ring.width() < $ring1.width())  {
			console.log("it moves");
			var move = $ring.remove();
			$tower1.find('.press').prepend(move);
			winner();
		}
		theTower = "-1"
	
	}

}

function winner() {
	if ($('#tower3').find('.rings').length === 3 || $('#tower2').find('.rings').length === 3 ) {
		alert("Yay!!!!");
	}
}