let headerEl = document.getElementById("header");
let homePageLink = document.getElementById("homePageLink");
let displayEvent = document.getElementById("displayEvent");

// click event
headerEl.addEventListener("click", function() {
    console.log("Event: click");
    displayEvent.innerHTML = "Event: click (header)";
});

// mouseover
headerEl.addEventListener("mouseover", function() {
    console.log("Event: mouseover");
    displayEvent.innerHTML = "Event: mouseover (header)";
});

// mouseout
headerEl.addEventListener("mouseout", function() {
    console.log("Event: mouseout");
    displayEvent.innerHTML = "Event: mouseout (header)";
});


homePageLink.addEventListener("click", function() {
    console.log("Event: click");
    displayEvent.innerHTML = "Event: click (link)";

    // prevents further default execution when using href="javascript:;"
    return false;
});




// DO NOT use below
// window.onload = function() {
//     alert("window onload triggered");
// }

// document.body.onclick = function() {
//     alert("document body clicked");
// }