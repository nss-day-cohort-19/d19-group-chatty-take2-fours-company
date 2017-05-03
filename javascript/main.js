console.log("main.js");

//Initialized the variables//

var messageinput = document.getElementById("userInput");
var clearbutton = document.getElementById("Reset");
var changeColor = document.getElementById("changeColor");
var changeSize = document.getElementById("changeSize");
var MessageForum = document.getElementById("MessageForum");
var deletemessage = document.getElementsByClassName("deletemessage");

//Added Eventlistener for reset button//

clearbutton.addEventListener("click", function(event){
	MessageForum.innerHTML = "";


});

//added eventlistener for carriage return //

var j=10;

messageinput.addEventListener("keypress", function(event){


	if (event.keyCode ===13){
var elementID = "post-"+j
	Chatty.crDomEl(elementID, messageinput.value);
j++
  messageinput.value = "";

	}
});

MessageForum.addEventListener("click", Chatty.delPost);

var changeColor = document.getElementById("changeColor");
var changeHeight = document.getElementById("changeHeight");
function darkTheme(){
	changeColor.classlist.add("dark");
}

changeColor.addEventListener("click",darkTheme());
function largeTheme(){
	changeHeight.classlist.add("large");
}

changeHeight.addEventListener("click", largeTheme());


Chatty.loadPosts(Chatty.crDomEl);