const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");
const errorMsg = document.querySelector(".ms-1");

addBtn.addEventListener("click", () => {
  if (input.value.trim()) {
    let newLi = document.createElement("li");
    newLi.classList.add("todo-item");

    let newSpan = document.createElement("span");
    newSpan.innerText = input.value;

    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("task-complete");

    let editBtn = document.createElement("i");
    editBtn.classList.add("btn", "btn-success", "fa-solid", "fa-pen-to-square");

    let delBtn = document.createElement("i");
    delBtn.classList.add("btn", "btn-danger", "fa-solid", "fa-trash");

    newLi.prepend(newCheckbox);
    newLi.append(newSpan, editBtn, delBtn);

    todoList.appendChild(newLi);

    input.value = "";
  } else {
    errorMsg.innerText = "Please enter a task!";
    errorMsg.style.color = "red";

    setTimeout(() => {
      errorMsg.innerText = "";
    }, 2000);
  }
});

todoList.addEventListener("change", (event) => {
  if (event.target.classList.contains("task-complete")) {
    const task = event.target.closest("li").querySelector("span");
    if (event.target.checked) {
      task.style.textDecoration = "line-through";
    } else {
      task.style.textDecoration = "none";
    }
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-trash")) {
    const liToRemove = event.target.closest("li");
    if (liToRemove) {
      liToRemove.remove();
    }
  }
});
