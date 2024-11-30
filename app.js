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
    editBtn.classList.add("btn", "fa-solid", "fa-pen-to-square", "edit-btn");

    let delBtn = document.createElement("i");
    delBtn.classList.add("btn", "fa-solid", "fa-trash", "del-btn");

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
  if (event.target.classList.contains("del-btn")) {
    const liToRemove = event.target.closest("li");
    if (liToRemove) {
      liToRemove.remove();
    }
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    const editBtn = event.target;
    const delBtn = editBtn.nextElementSibling;
    const replaceSpan = editBtn.previousElementSibling;

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = replaceSpan.innerText;
    replaceSpan.replaceWith(inputField);

    const okBtn = document.createElement("button");
    okBtn.classList.add("btn", "btn-primary");
    okBtn.innerText = "✓";
    editBtn.replaceWith(okBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("btn", "btn-warning");
    cancelBtn.innerText = "✕";
    delBtn.replaceWith(cancelBtn);

    cancelBtn.addEventListener("click", () => {
      inputField.replaceWith(replaceSpan);
      cancelBtn.replaceWith(delBtn);
      okBtn.replaceWith(editBtn);
    });

    okBtn.addEventListener("click", () => {
      replaceSpan.innerText = inputField.value;
      inputField.replaceWith(replaceSpan);
      okBtn.replaceWith(editBtn);
      cancelBtn.replaceWith(delBtn);
    });
  }
});
