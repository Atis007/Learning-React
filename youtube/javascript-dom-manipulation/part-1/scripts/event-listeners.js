// DOM Manipulation

// Event Listeners

// element.addEventListener('click', function); <- syntax for adding an event listener

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("Example 2 clicked!");
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover event
const newBackgroundColor = document.querySelector(".box-3");

function changeBgButton() {
  newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgButton);
newBackgroundColor.addEventListener("mouseout", function () {
  newBackgroundColor.style.backgroundColor = "";
});

// Reveal Event

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  hiddenContent.classList.toggle("show");
}

revealBtn.addEventListener("click", revealContent);
