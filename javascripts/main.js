"use strict";

function showPosts (posts) {
  console.log(posts);
  var outputField = document.getElementById('MessageForum');
  for(var i = 0; i < posts.length; i++) {
    var string = `<div id="${posts[i].elementID}"><p>${posts[i].post}</p><button class='btnDel'>Delete</button></div>`;
    outputField.innerHTML += string;
  }
  
}

Chatty.loadPosts(showPosts);

//event listeners
//  Add an event listener for "keypress" and detect 
//  when then return key has been pressed in the message field.


//  When return key is detected, you'll create a new message (*see details below*).

//  When the user clicks the clear messages button, all current chat messages should 
//  be removed from the application.
//
//      If there are no messages, then the clear messages button should be disabled 


//  When the user clicks on the dark theme checkbox, change the background color of 
//  your application to a dark gray, and the font color for messages should be white(ish)... you pick.
//  
//    If the user unchecks the box, the background color should change back to white with 
//    black text for messages.



//userInput needs to post & clear on keyup

//messageBox needs to populate with json [] on page load

//delete btn needs to populate to the right of each message, both posts and newPosts []s



