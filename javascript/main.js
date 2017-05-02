console.log("main.js");

//Initialized the variables//

var messageinput = document.getElementById("TextBox");
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

messageinput.addEventListener("keypress", function(event){
	//console.log(event.keyCode);


	if (event.keyCode ===13){

		MessageForum.innerHTML += messageinput.value + "<button class='deletemessage'>" + 'Delete' + "</button>" + "<br><br>";
		messageinput.value = "";
	//deletemessage.addEventListener("click", function(event){
		//console.log(event. deletemessage);
	//});

	}
});

// Function to read content of JSON file (https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript)//
function loadJSON(callback) {

    var jsonObj = new XMLHttpRequest();
        jsonObj.overrideMimeType("application/json");
    jsonObj.open('GET', 'posts.JSON', true); // Replace 'my_data' with the path to your file
    jsonObj.addEventListener = function () {
          if (jsonObj.readyState == 4 && jsonObj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(jsonObj.responseText);
          }
    };
    jsonObj.send(null);
 }


function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    MessageForum.innerHTML = "test" +JSON.parse(response);
 });

}
init();