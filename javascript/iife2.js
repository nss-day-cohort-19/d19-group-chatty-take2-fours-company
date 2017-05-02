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

return originalChatty;
})(Chatty);

