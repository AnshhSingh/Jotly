showNotes();
console.log("uhh")
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let notetxt = document.getElementById("notetxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(notetxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  notetxt.value = "";
  console.log(notesObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
			<div class="note">
				<p id="ad">${index + 1}). ${element}</p>
    <button type="button" id="clear"> remove</button>
			</div>
		`;
  });
  let notesElm = document.getElementById("addnote");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add Note" section above to add notes.`;
  }
}
function delelement() {

}