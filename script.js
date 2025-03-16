
let notesTitles = [];
let notes = [];

let trashNotesTitles = [];
let trashNotes = [];

let archivNotesTitles = [];
let archivNotes = [];


function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }

    getFromLocalStorage();
    render();
}


function renderArchivNotes() {
    let archivContenRef = document.getElementById('archiv_content')
    archivContenRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
        archivContenRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    }
}


function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content')
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteTitleInputRef = document.getElementById('note_input_title');
    let noteInput = noteInputRef.value;
    let noteTitle = noteTitleInputRef.value;

    if (noteInputRef == "" || noteTitle == "") {
        return
    }

    notes.push(noteInput);
    notesTitles.push(noteTitle);

    saveToLocalStorage();
    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";
}


function saveToLocalStorage() {
    localStorage.setItem("myTitles", JSON.stringify(notesTitles));
    localStorage.setItem("myNotes", JSON.stringify(notes));
}


function getFromLocalStorage() {
    let myArrTitle = JSON.parse(localStorage.getItem("myTitles"));
    let myArrNotes = JSON.parse(localStorage.getItem("myNotes"));
    let myTrashArrTitle = JSON.parse(localStorage.getItem("myTrashTitles"));
    let myArrTrashNotes = JSON.parse(localStorage.getItem("myTrashNotes"));
    let myArchivArrTitle = JSON.parse(localStorage.getItem("myArchivTitles"));
    let myArrArchivNotes = JSON.parse(localStorage.getItem("myArchivNotes"));

    if (myArrTitle != null && myArrNotes != null) {
        notesTitles = myArrTitle
        notes = myArrNotes
    }

    if (myTrashArrTitle != null && myArrTrashNotes != null) {
        trashNotesTitles = myTrashArrTitle
        trashNotes = myArrTrashNotes
    }

    if (myArchivArrTitle != null && myArrArchivNotes != null) {
        archivNotesTitles = myArchivArrTitle
        archivNotes = myArrArchivNotes
    }

    renderArchivNotes();
    renderTrashNotes();
}


function noteToTrash(indexNote) {
    trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    trashNotesTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNotesTitle[0]);

    localStorage.setItem("myTrashTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("myTrashNotes", JSON.stringify(trashNotes));

    localStorage.removeItem("myTitles");
    localStorage.removeItem("myNotes");

    saveToLocalStorage();

    renderNotes();
    renderTrashNotes();
}


function noteToArchiv(indexNote) {
    archivNote = notes.splice(indexNote, 1);
    archivNotes.push(archivNote[0]);
    archivNotesTitle = notesTitles.splice(indexNote, 1);
    archivNotesTitles.push(archivNotesTitle[0]);

    localStorage.setItem("myArchivTitles", JSON.stringify(archivNotesTitles));
    localStorage.setItem("myArchivNotes", JSON.stringify(archivNotes));

    localStorage.removeItem("myTitles");
    localStorage.removeItem("myNotes");

    saveToLocalStorage();

    renderNotes();
    renderArchivNotes();
}


function archivToTrash(indexArchivNote) {
    trashNote = archivNotes.splice(indexArchivNote, 1);
    trashNotes.push(trashNote[0]);
    trashNotesTitle = archivNotesTitles.splice(indexArchivNote, 1);
    trashNotesTitles.push(trashNotesTitle[0]);

    localStorage.setItem("myTrashTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("myTrashNotes", JSON.stringify(trashNotes));

    localStorage.removeItem("myArchivTitles");
    localStorage.removeItem("myArchivNotes");

    saveToLocalStorage();

    renderNotes();
    renderTrashNotes();
}


function archivToNote(indexArchivNote) {
    archivNote = archivNotes.splice(indexArchivNote, 1);
    notes.push(archivNote[0]);
    archivNotesTitle = archivNotesTitles.splice(indexArchivNote, 1);
    notesTitles.push(archivNotesTitle[0]);

    localStorage.setItem("myTitles", JSON.stringify(notesTitles));
    localStorage.setItem("myNotes", JSON.stringify(notes));

    localStorage.removeItem("myArchivTitles");
    localStorage.removeItem("myArchivNotes");

    saveToLocalStorage();

    renderNotes();
    renderArchivNotes();
}


function trashToNote(indexTrashNote) {
    notes.push(trashNotes[indexTrashNote]);
    notesTitles.push(trashNotesTitles[indexTrashNote]);
  
    trashNotes.splice(indexTrashNote, 1); 
    trashNotesTitles.splice(indexTrashNote, 1); 
  
    localStorage.setItem("myTitles", JSON.stringify(notesTitles));
    localStorage.setItem("myNotes", JSON.stringify(notes));
  
    localStorage.removeItem("myTrashTitles");
    localStorage.removeItem("myTrashNotes");
  
    saveToLocalStorage();
  
    renderNotes();
    renderTrashNotes();
  }


function deleteTrashNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);

    localStorage.removeItem("myTrashTitles");
    localStorage.removeItem("myTrashNotes");

    renderNotes();
    renderTrashNotes()
}


function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let index = 0; index < notesTitles.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index);
    }
}