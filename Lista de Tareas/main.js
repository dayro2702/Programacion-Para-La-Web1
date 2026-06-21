const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const texto = input.value;

  if (texto !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = texto;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    li.appendChild(addEditBtn(p));
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

function addEditBtn(parrafo) {
  const editBtn = document.createElement("button");

  editBtn.textContent = "EDIT";
  editBtn.className = "btn-edit";

  editBtn.addEventListener("click", () => {
    const nuevoTexto = prompt("Editar plan:", parrafo.textContent);

    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      parrafo.textContent = nuevoTexto;
    }
  });

  return editBtn;
}