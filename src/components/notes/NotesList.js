import React from "react";
import Note from "./Note";
function NotesList({ notes }) {
  console.log("props", notes);
  return (
    <div className="noteslist">
      <div>{notes && notes.map((note) => <Note note={note} />)}</div>
    </div>
  );
}

export default NotesList;
