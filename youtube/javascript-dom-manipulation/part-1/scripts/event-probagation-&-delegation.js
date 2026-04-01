// DOM Manipulation

// Event Propagation

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true,
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true,
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  true,
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true,
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "clicked"));
  },
  true,
);

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its
// present AND future descendants that match a selector.

// this is too much work to add eventlisteners to every single li element, instead we can add an event listener to the parent element and use event delegation to target the li elements

/*document.querySelector("#football").addEventListener("click", function (e) {
  console.log("football clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

document.querySelector("#basketball").addEventListener("click", function (e) {
  console.log("basketball clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

document.querySelector("#boxing").addEventListener("click", function (e) {
  console.log("boxing clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

document.querySelector("#tennis").addEventListener("click", function (e) {
  console.log("tennis clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

document.querySelector("#golf").addEventListener("click", function (e) {
  console.log("golf clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});*/

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked.");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const sports = document.querySelector("#sports");

const newSport = document.createElement("li");
newSport.innerText = "hockey";
newSport.setAttribute("id", "hockey");
sports.appendChild(newSport);
