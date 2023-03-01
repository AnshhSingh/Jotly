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
        <div><p><b>Note ${index + 1}</b></p></div>
				<p id="element">${element}</p>
    <button class="button" type="button" id="delbutton"onclick="deleteNote(this.id)" >Delete Note</button>
   
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
function deleteNote(index) {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

