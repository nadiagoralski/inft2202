/*
    myFunction
    define the functionality of the function
*/
function myFunction() {
  alert("this is the about link");
}

// define variable to reference about link
var aboutLink = document.getElementById("about");
// setting up event listener
// in this case, the "click" event
aboutLink.addEventListener("click", myFunction, false);
