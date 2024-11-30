const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");
const todoItem = document.querySelector(".todo-item");
const listStyle = document.querySelector("#list-style");

addBtn.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.classList.add("todo-item");
  newLi.innerText = input.value;

  let newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.classList.add("task-complete");

  let delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  delBtn.innerText = "Delete";

  let editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "Edit";

  newLi.prepend(newCheckbox);
  newLi.append(editBtn);
  newLi.append(delBtn);

  todoList.appendChild(newLi);

  input.value = "";
});

todoList.addEventListener("change", (event) => {
  if (event.target.classList.contains("task-complete")) {
    const theListItem = event.target.closest(".todo-item");
    if (event.target.checked) {
      theListItem.style.textDecoration = "line-through";
    } else {
      theListItem.style.textDecoration = "none";
    }
  }
});
