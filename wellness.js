let id = 0;

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary btn-sm";
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    let elementToDelete = document.getElementById(`row-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}

const form = document.querySelector("form");
const table = document.querySelector("#list tbody");

form.addEventListener("submit", (e) => {

  e.preventDefault();
  const date = e.target.date.value;
  const slept = e.target.slept.value;
  const energy = e.target.energy.value;

  if ((date === "") || (slept === "") || (energy === ""))
    alert("All three fields are required.");
  else {
    let newRow = `
        <tr id="row-${id}">
        <td>${date}</td>
        <td>${slept}</td>
        <td>${energy}</td>
        <td id="button-cell-${id}"></td>
        </tr>
    `;

    table.insertAdjacentHTML("beforeend", newRow);
    let buttonCell = document.getElementById("button-cell-" + id);
    buttonCell.appendChild(createDeleteButton(id++));
    e.target.reset();
  }

});
