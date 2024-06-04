// document.getElementById("python").onclick = function () {
//   alert("alert python");
// };

// document.getElementById("python-div").addEventListener("click", function (e) {
//   console.log("PYTHON-DIV");
// });

// document.getElementById("python-img").addEventListener("click", function (e) {
//   console.log("PYTHON-IMG");
//   e.stopPropagation();
// });

/*
let imgs = document.querySelectorAll("img");

// SOME OF THE PROPERTIES ACCESS THROUGH 'e'
imgs.forEach(function (img) {
  img.addEventListener("click", function (e) {
    console.log("Clicked element:", e.target);
    console.log("Event type:", e.type);
    console.log("Coordinates relative to the viewport:", e.clientX, e.clientY);
    console.log("Coordinates relative to the document:", e.pageX, e.pageY);
    console.log("Alt key pressed:", e.altKey);
  });
});

//HIDING IMG WHILE CLICKING ON IMG
imgs.forEach(function (img) {
  img.addEventListener("click", function (e) {
    console.log(img.parentElement);
    console.log(img.parentElement.hidden);
    console.log((img.parentElement.hidden = true));
  });
});
*/

// HIDING IMG BY CLICKING ON CROSS MARK
let icons = document.querySelectorAll("i");

icons.forEach(function (icon) {
  icon.addEventListener("click", function (e) {
    icon.parentElement.hidden = true;
  });
});
