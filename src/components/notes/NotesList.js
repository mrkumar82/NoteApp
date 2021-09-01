import React from "react";
import Note from "./Note";
function NotesList({ notes }) {
  return (
    <div className="noteslist">
      <div>
        {notes && notes.map((note) => <Note note={note} key={note.id} />)}
      </div>
    </div>
  );
}

export default NotesList;
