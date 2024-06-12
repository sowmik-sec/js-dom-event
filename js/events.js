console.log("Habibi");
function makeRed() {
  document.body.style.backgroundColor = "red";
}

const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
});

document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
