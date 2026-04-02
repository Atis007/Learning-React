// Variable

const accordion = document.getElementsByClassName("content-container");

// Event Listener
Array.from(accordion).forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
