// Traverse the DOM

// Parent Node Traversal
// you are going "up" in the DOM tree, so you are going to the parent node of the element that you are selecting
let ul = document.querySelector("ul");
console.log(ul.parentNode); // gettint the parent of the <ul> element
console.log(ul.parentElement); // this is the same as parentNode, but it will return null if the parent is not an element node
console.log(ul.parentNode.parentNode); // this is going up two levels in the DOM tree, so we will know about the grandparent node of the <ul> element
console.log(ul.parentElement.parentElement);

// Child Node Traversal
// you are going "down" in the DOM tree, so you are going to the child nodes of the element that you are selecting
console.log(ul.childNodes); // this is getting all the child nodes of the <ul> element, including text nodes and comment nodes
console.log(ul.firstChild);
console.log(ul.lastChild);

// because the childNodes property is counting the text nodes in (which are the spaces and line breaks in the HTML) as child nodes,
// we need to be careful when using the firstChild and lastChild properties, because they might return a text node instead of an element node.
// so if we want the bg color of the first li item, we need to do it like this:
ul.childNodes[1].style.backgroundColor = "blue"; // this is selecting the first <li> element, which is the second child node of the <ul> element, because the first child node is a text node

console.log(ul.children); // this is only getting the real child elements, no comment or text nodes
console.log(ul.firstChildElement); // real first child element of the <ul> element
console.log(ul.lastChildElement); // real last child element of the <ul> element,
// these two are giving back the full element, not just the text content of the element (so <li class="...">...</li>)

// Sibling Node Traversal
// you are going "sideways" in the DOM tree, so you are going to the sibling nodes of the element that you are selecting

const div = document.querySelector("div");

// this props are nearly always going to return a text node, because in the HTML we have line breaks and spaces between the elements, which are counted as text nodes
console.log(ul.nextSibling); // this is getting the next sibling node of the <ul> element, which is a text node
console.log(ul.previousSibling); // this is getting the previous sibling node of the <ul> element, which is a text node

// so to get the next and prev sibling elements, we need to use the nextElementSibling and previousElementSibling properties, which will return the next and previous sibling elements, ignoring the text nodes
console.log(ul.nextElementSibling); // this will be null right now, there is no next sibling element of the <ul> element.
console.log(ul.previousElementSibling); // this is getting the previous sibling element of the <ul> element, which is the <h1> element
