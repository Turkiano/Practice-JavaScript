const toDos = ["Study DOM", "Study JavaScript", "Workout"];

const form = document.getElementById("add-todo");

console.log(toDos);

function renderTodos() {
  const container = document.querySelector(".container"); //to target the div class in HTML file
  const ul = document.createElement("ul");
  ul.classList.add("todos");
  container.appendChild(ul); //to include uordered list into the container

  toDos.forEach((Element) => {
    const li = document.createElement("li");
    li.classList.add("toDo");
    li.textContent = Element; // Set the text content of each list item
    ul.appendChild(li); // Append each list item to the unordered list
  });
}


window.addEventListener("load", () => {
  renderTodos();
});

function addTodo(value) {
  const ul = document.querySelector(".todos");
  const li = document.createElement("li");
  li.classList.add("toDo");
  li.textContent = value;
  ul.appendChild(li);
}

form.addEventListener("submit", (Element) => {
  const value = document.querySelector(".toDo-input").value;
  addTodo(value);
  Element.preventDefault();
});
