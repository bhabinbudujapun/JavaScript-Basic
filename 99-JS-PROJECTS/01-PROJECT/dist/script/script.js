// Function for changing background color
const body = document.querySelector("body");

const color = document.querySelectorAll(".color");

color.forEach(function (value) {
  value.addEventListener("click", function (event) {
    body.classList.remove(body.className);
    body.classList.add(value.classList[1]);
  });
});

// Function for displaying time
setInterval(function () {
  const time = document.getElementById("time");
  const date = new Date();

  time.innerHTML = date.toLocaleTimeString();
}, 1000);
