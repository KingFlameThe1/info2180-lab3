document.addEventListener("DOMContentLoaded", () => {
	let gBoard = document.getElementById("board");

	let boxes = gBoard.childNodes;
	//console.log(boxes);
	let count = 0;
	for(var i = 1; i < boxes.length; i += 2){
		boxes[i].classList.add("square");
		boxes[i].id = count;
		count++;
		//console.log(count);
	};
	
	var move = ["","","","","","","","",""];
	var turn = 1;
	var win = false;
	var winner = "";
	
	for(var i = 1; i < boxes.length; i += 2){
		
		boxes[i].addEventListener('click', function(e){
			let xText =  document.createTextNode('X');
			let oText =  document.createTextNode('O');

			if ((turn % 2 == 0) && (move[parseInt(e.target.id)].length < 1) && (win == false)){
				e.target.appendChild(oText);
				e.target.classList.add('square.O');
				move[parseInt(e.target.id)] = "O";
				turn++;
			}else if((turn % 2 != 0) && (move[parseInt(e.target.id)].length < 1) && (win == false)){
				e.target.appendChild(xText);
				e.target.classList.add('square.X');
				move[parseInt(e.target.id)] ="X";
				turn++;
			}
			
		});//end boxes[i].addEventListener
		
	};//end for
	
	boxes.forEach(function(elem, index) {
		elem.addEventListener('mouseover', function(e) {
			if (turn % 2 == 0){
				e.target.classList.add('hover.O');
			}else{e.target.classList.add('hover');}
		});
	  
		elem.addEventListener('mouseout', function(e) {
			if (turn % 2 == 0){
				e.target.classList.remove('hover.O');
			}else{e.target.classList.remove('hover');}
			
		});
	});//end boxes.foreEach
	
	
	boxes.forEach(function(elem, index) {
		elem.addEventListener('mouseover', function(e) {
			for (var inc = 0;inc < 9; inc +=3){
				
				if((move[inc] === "X") && (move[inc+1] === "X") && (move[inc+2] === "X")){
					winner = "X";
				}
				if((move[inc] === "O") && (move[inc+1] === "O") && (move[inc+2] === "O")){
					winner = "O";
				}
			}//end for
			for(inc = 0;inc < 3; inc++){
				if((move[inc] === "X") && (move[inc+3] === "X") && (move[inc+6] === "X")){
					winner = "X";
				}
				if((move[inc] === "O") && (move[inc+3] === "O") && (move[inc+6] === "O")){
					winner = "O";
				}
			}//end for
			
			if((move[0] === "X") && (move[4] === "X") && (move[8] === "X")){
				winner = "X";
			}
			else if((move[0] === "O") && (move[4] === "O") && (move[8] === "O")){
				winner = "O";
			}
			
			if((move[2] === "X") && (move[4] === "X") && (move[6] === "X")){
				winner = "X";
			}else if((move[2] === "O") && (move[4] === "O") && (move[6] === "O")){
				winner = "O";
			}
			
			console.log(winner)
			if((winner == "X" )|| (winner == "O")){
				document.getElementById("status").textContent = "Congratulations! "+ winner +" is the winner!";
				win = true;
			}
		});
	});// end boxes.forEach
	
	let sNGame = document.querySelector(".btn");
	
	sNGame.addEventListener('click',() =>{
        location.reload(true);
    });
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