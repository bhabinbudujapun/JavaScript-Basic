console.log("hello, world!!");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const result = document.querySelector("#result");

  if (weight < 0 || weight == "" || isNaN(weight)) {
    result.innerHTML = "Invalid input";
  } else if (height < 0 || height == "" || isNaN(height)) {
    result.innerHTML = "Invalid input";
  } else {
    const calc = (weight / ((height * height) / 10000)).toFixed(2);
    var message = "";
    if (calc < 18.6) {
      message = "Under-weight";
    } else if (calc < 24.9 && calc > 18.6) {
      message = "Normal-weight";
    } else {
      message = "Over-weight";
    }
    result.innerHTML = `${calc}` + " " + message;
  }
});
