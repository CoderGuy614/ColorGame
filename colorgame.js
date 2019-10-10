
var colors = generateRandomColors(6);
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;
var colors = generateRandomColors(numSquares);

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor(); 
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
			} else {
				squares[i].style.display = "none"

			}
		}
	
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
});


resetButton.addEventListener("click", function(){
	// generate new colors
	// pick a new random color from array
	// change colors of squares
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor
	this.textContent = "New Colors";
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
}
	h1.style.background = "steelBlue";
})
for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	// add initial color to squares.

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		// console.log(clickedColor, pickedColor)
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "correct!";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "steelBlue";
			messageDisplay.textContent = "try again"
		}
	});
}

function changeColor(color) {

for(var i = 0; i < squares.length; i++) {
	squares[i].style.background = color;
}
}
		
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function generateRandomColors(num) {
	// make an array 
	// add num random numbers to array
	//return arr
	var arr = [];
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor())
	}
return arr;
}
