function getNoteTemplate(indexNote) {
    return `
    <div class="note">
        <h3 class="cutoff-text">${notesTitles[indexNote]}</h3>
        <p class="cutoff-text">${notes[indexNote]}</p>
        <div>
            <button onclick="noteToTrash(${indexNote})" class="btn">T</button>
            <button onclick="noteToArchiv(${indexNote})" class="btn">A</button>
        </div>
    </div>`;
}


function getArchivNoteTemplate(indexArchivNote) {
    return `
    <div class="note">
        <h3 class="cutoff-text">${archivNotesTitles[indexArchivNote]}</h3>
        <p class="cutoff-text">${archivNotes[indexArchivNote]}</p>
        <div>
            <button onclick="archivToTrash(${indexArchivNote})" class="btn">T</button>
            <button onclick="archivToNote(${indexArchivNote})" class="btn">N</button>
        </div>
    </div>`;
}


function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div class="note">
        <h3 class="cutoff-text">${trashNotesTitles[indexTrashNote]}</h3>
        <p class="cutoff-text">${trashNotes[indexTrashNote]}</p>
        <div>
            <button onclick="deleteTrashNote(${indexTrashNote})" class="btn">X</button>
            <button onclick="trashToNote(${indexTrashNote})" class="btn">N</button>
        </div>
    </div>`;
}