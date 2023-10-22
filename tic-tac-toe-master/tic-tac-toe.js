document.addEventListener("DOMContentLoaded", () => {
	let gBoard = document.getElementById("board");

	let boxes = gBoard.childNodes;
	//console.log(boxes);
	for(var i = 1; i < boxes.length; i += 2){
		boxes[i].classList.add("square");
	};
	
	
	
	let turn = [];
	
	for(var i = 1; i < boxes.length; i += 2){
		
		boxes[i].addEventListener('click', function(e){
			let xText =  document.createTextNode('X');
	let oText =  document.createTextNode('O');
			if (turn.length % 2 == 0){
				e.target.appendChild(oText);
				e.target.classList.add('square.O');
				turn += ["O"];
			}else{
				e.target.appendChild(xText);
				e.target.classList.add('square.X');
				turn +=["X"];
				
			}
			console.log(turn);
		});
	};
	
	
	
	
});




/*


	
		boxes.forEach(function(elem, index) {
		if (turn % 2 === 0){
			elem.addEventListener('click', function(e) {
				e.target.appendChild(oText);
				e.target.classList.add('square.O');
			});
		}else{
			elem.addEventListener('click', function(e) {
				e.target.appendChild(oText);
				e.target.classList.add('square.X');
			});
		}
	});
	
	
boxes.forEach(function(elem, index) {
		let xText = "X";
		let oText = "O";
		
		if (turn % 2 === 0){
			elem.addEventListener('click', function(e) {
				e.target.appendChild(oText);
				e.target.classList.add('square.O');
			});
		}else{
			elem.addEventListener('click', function(e) {
				e.target.appendChild(oText);
				e.target.classList.add('square.X');
			});
		}
	});


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