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
originalChatty.delArray= function(elementID){
	for (var i = postLog.length - 1; i >= 0; i--) {
	 	if(elementID===postLog[i].elementID){
	 		postLog.splice(i, 1);
	 		console.log(postLog);
	 	}
	 }
}

originalChatty.delPost = function(event){
	console.log("delPost");
	if (event.target.tagName.toLowerCase() === "button") {
    console.log("You clicked on an <li> element");
    var target=event.target.parentElement;
    MessageForum.removeChild(target);
    originalChatty.delArray(target.id);
  }

}
return originalChatty;
})(Chatty);

