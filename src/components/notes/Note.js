import React from "react";

function Note({ note }) {
  return (
    <div>
      <h5>{note.title}</h5>
      <p>{note.content}</p>
    </div>
  );
}

export default Note;
