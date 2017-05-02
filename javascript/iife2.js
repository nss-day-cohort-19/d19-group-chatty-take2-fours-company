console.log("iife2 js");
var Chatty = (function(originalChatty){
var postLog = [];

originalChatty.crDomEl = function(elementID, post){
	var outputField = document.getElementById('MessageForum');
	postLog.push({
		post:post, elementID:elementID
	})
	    var string = `<div id="${elementID}"><p>${post}</p><button class='btnDel'>Delete</button></div>`;
	    outputField.innerHTML += string;
}

originalChatty.delPost = function(event){
	console.log("delPost");
	if (event.target.tagName.toLowerCase() === "button") {
    console.log("You clicked on an <li> element");
    console.log(event.target.parentElement);
    MessageForum.removeChild(event.target.parentElement);

  }
}
return originalChatty;
})(Chatty);

