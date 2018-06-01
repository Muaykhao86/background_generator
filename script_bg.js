
// note - look how when selecting a class its the same as when you select it in 
// a css file .style
// These two bellow select the class names color1 and 2
// var color1= document.querySelector(".color1");
// var color2= document.querySelector(".color2");
// This selects the header h3 * there is only one h3 in the doc so its ok for this instance
// I could otherwise call give it a id 
// var css = document.querySelector("h3");
// This selects the the body with the id "gradient"
// var body = document.querySelector("body");

// This function is created to avoid repeating myself in two listeners
// function getinput (){
// // Here I am setting the body css style property for background
// 		body.style.background = 
// // This is the Linear- gradient function
// // and can go in any direction, change tilt deg and amount for each color
// // Here i am inserting my var's + .value for inputs
// 		"linear-gradient(50deg , " 
// 		+ color1.value 
// // note - to space the syntax and write in what i want i need to add string commas
// // the vars dont use them because they are not string
// 		+ ", " 
// 		+ color2.value 
// 		+ ")"; 
// To add the gradient values to the body background in text we can
// add another way of inserting text by adding .textContent
// So - Add the body.style.background from above to css which is <h3>
// and add on the string ; so that you can copy and paste directly from the scree to your css file.
// css.textContent = body.style.background + ";";
// }


// MY MESS AROUND CREATION ⬇



var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var css = document.querySelector("h3");
var body = document.querySelector("body");
var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var col = false;
var but = document.getElementById("but")

function displayStyle(){
css.textContent = body.style.background + ";";
}
function inputLength() {
	return input.value.length;
}
// This was just so i could get some experience with the includes method
// function includesdeg() {
// 	if (inputLength() > 0 && input.value.includes("deg"))
// 		return true;
// 	}
function changeTiltAfterClick() {
	if (col === true) {
		thirdcolour();
	}
	else if (col === false) {
		getinput();
	}
}
	
function changeTiltAfterKeypress(event) {

	if (col === true &&  event.keyCode === 13){
		thirdcolour();
	}
	else if(col === false && event.keyCode === 13){
		getinput();
	}
}
// This IS A GAME CHANGER!!! Really opened my eyes to alot of problems i was trying to solve
//  Every time that this function is run it changes the value of col to true or false
//  So now i can toggle my button and let other functions run off of this statement aswell 
 
function isit(){
	col = !col;
 console.log(col);
	itis();

}

function itis(){

if (col ===true){
		thirdcolour();
	}
	else if(col === false){
		getinput();
	}

}

function getinput (){
	if (input.value.length < 1){
		body.style.background = 
		"linear-gradient(50deg, " 
		+ color1.value 
		+ ", " 
		+ color2.value  
		+")"; 
		displayStyle();
	}
	else {
		body.style.background = 
		"linear-gradient( "
		+input.value.trim()
		+"deg, "
		+ color1.value 
		+ ", " 
		+ color2.value 
		+")"; 
		displayStyle();
	}

}
function thirdcolour (){
	if (col === true && input.value.length < 1){
	body.style.background = 
		"linear-gradient(50deg, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+","
		+ color3.value 
		+")"; 
		displayStyle();
		
	}
	else if( col === true){
		body.style.background = 
		"linear-gradient( "
		+input.value.trim()
		+"deg, "
		+ color1.value 
		+ ", " 
		+ color2.value 
		+","
		+ color3.value
		+")"; 
		displayStyle();
		
	}
}

color1.addEventListener("input", itis );

color2.addEventListener("input", itis );

button.addEventListener("click", changeTiltAfterClick);

input.addEventListener("keypress", changeTiltAfterKeypress);

color3.addEventListener("input", thirdcolour);

but.addEventListener("click", isit);

// if the third color button is pressed then add in a third color 





