
// first iife interacts with json??
// second iife interacts with data??
// third iife interacts with dom??

var Chatty = (function () {
  var posts = [];

  return {
    loadPosts: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        posts = JSON.parse(this.responseText).posts;
        callbackToInvoke(posts);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

      });
      loader.open("GET", "posts.JSON");
      loader.send();
    }
  }
})();