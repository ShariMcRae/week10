// create counter to uniquely identify each row as they are created
let id = 0;

// for convenience, set variables holding form and 'list' table body elements
const form = document.querySelector("form");
const table = document.querySelector("#list tbody");

// Add 'submit' event listener to form that preventss default
// response and adds a new row to the 'list' table.
form.addEventListener("submit", (e) => {

  e.preventDefault();

  // Create string holding HTML for new row with current 'id'
  // counter in the id attribute of the row (tr) and button cell (td)
  // so we can retrieve those DOM elements later by ID.
  let newRow = `
        <tr id="row-${id}">
        <td>${e.target.date.value}</td>
        <td>${e.target.slept.value}</td>
        <td>${e.target.energy.value}</td>
        <td id="button-cell-${id}"></td>
        </tr>
    `;

  // Insert HTML for new row at end of table body element
  table.insertAdjacentHTML("beforeend", newRow);

  // Get td element that will hold the delete button,
  // create new delete button, insert button into td element,
  // and increment 'id' counter.
  let buttonCell = document.getElementById("button-cell-" + id);
  buttonCell.appendChild(createDeleteButton(id++));

  // clear form fields
  e.target.reset();
});

// For a given a row id (id) create and return a new Delete button.
// Set onclick event to call function that will remove the row with id `row-${id}`
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
