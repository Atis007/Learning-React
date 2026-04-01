// DOM Manipulation

// GetElementById()
let title = document.getElementById("main-heading");
console.log(title);

// GetElementByClassName()
let listItems = document.getElementsByClassName("list-items"); // this is selecting every element that have a classname of list-items
console.log(listItems);

// GetElementByTagName()
const liItems = document.getElementsByTagName("li"); // this is selecting every <li> elements
console.log(liItems);

// querySelector()
const firstContainer = document.querySelector("div"); // selecting the first item that matches the selector
console.log(firstContainer);

// querySelectorAll()
const allContainers = document.querySelectorAll("div"); // selecting all the items that matches the selector
console.log(allContainers);

// Styling Elements
title = document.querySelector("#main-heading");
title.style.color = "red";

listItems = document.querySelectorAll(".list-items");
// listItems.style.fontSize = "2rem"; // this would not work, because its trying to apply an inline to five different elements
// need to use a loop to loop through each item and apply the style to each one of them
listItems.forEach((item) => {
  item.style.fontSize = "2rem";
});

// Creating Elements

let ul = document.querySelector("ul");
const li = document.createElement("li"); // this is creating a new <li> element but it is not yet added to the DOM

// Adding Elements to the DOM

ul.append(li); // this is adding the new <li> element to the end of the <ul> element

// Modifying the text
// innerText, textContent, innerHTML

const firstListItem = document.querySelector(".list-items");

// in most cases innerText is used.
console.log(firstListItem.innerText); // getting the visible text contained inside that node
console.log(firstListItem.textContent); // displayed the same way as it is in the HTML, including hidden text
console.log(firstListItem.innerHTML); // exactly like textContent but it also includes the HTML tags, this is dangerous to use.

li.innerText = "X-men"; // this is changing the text of the new <li> element

// Modifying Attributes & Classes

li.setAttribute("id", "main-heading"); // this is adding an id attribute to the new <li> element
li.removeAttribute("id"); // this is removing the id attribute from the new <li> element

console.log(title.getAttribute("id")); // this is getting the value of the id attribute of the title element, which is main-heading

li.classList.add("list-items"); // this is adding the list-items class to the new <li> element
//li.classList.remove("list-items"); // this is removing the list-items class from the new <li> element

console.log(li.classList.contains("list-items")); // this is checking if the new <li> element has the list-items class, which is true

// Remove Elements

li.remove(); // this is removing the new <li> element from the DOM
