// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Event Listener for add btn

addTask.addEventListener("click", () => {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkBtn.classList.add("checkTask");
  task.appendChild(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.classList.add("deleteTask");
  task.appendChild(deleteBtn);

  if (inputTask.value === "") {
    alert("Please enter a task");
    return;
  }

  taskContainer.appendChild(task);

  inputTask.value = "";

  checkBtn.addEventListener("click", () => {
    checkBtn.parentElement.style.textDecoration = "line-through";
  });

  deleteBtn.addEventListener("click", (e) => {
    let target = e.target;
    target.parentElement.parentElement.remove(); // the target is the <i> element, which is inside a button, inside the list item,
    // thats why we need to go up two levels, because we want to remove the whole list item, not just the <i> tag.
  });
});
