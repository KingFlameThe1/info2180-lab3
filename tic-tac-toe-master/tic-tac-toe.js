document.addEventListener("DOMContentLoaded", () => {
  let gBoard = document.getElementById("board");

	let boxes = gBoard.childNodes;
	console.log(boxes);
	for(var i = 1; i < boxes.length; i += 2){
		boxes[i].classList.add("square");
	};
	
});




/*

document.addEventListener("load",function(e){
	for(var i = 1; i <= document.getElementById('board').childElementCount;i++){
		g.classList.add(square);
		g = g.nextSibling;
	}
	
	
});


boxes.forEach(function(elem, index){
		elem.classList.add("square");
	});


/*g.forEach(function(elem, index){
	elem.addEventListener("load", function(e){
		e.target.classList.add("square");
	});
});

g.addEventListener('load', function(


document.onload = function loadGrid(){
	grid.classList.add('square');
	grid.childNodes.classList.add('square');
});
*/