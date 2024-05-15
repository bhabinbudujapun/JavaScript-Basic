console.log("hello world!");

const body = document.querySelector("body");

const color = document.querySelectorAll(".color");

color.forEach(function (value) {
  value.addEventListener("click", function (event) {
    body.classList.remove(body.className);
    body.classList.add(value.classList[1]);
  });
});
