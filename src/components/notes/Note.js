import React from "react";
import { deleteNote, favoriteNote } from "../../store/actions/notesAction";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
function Note({ note }) {
  const dispatch = useDispatch();
  const favorite = note.favorite ? "red-text" : "";
  const date = moment(note.createdAt.toDate()).fromNow();

  const deleteHandler = () => {
    dispatch(deleteNote(note.id));
  };
  const updateFavorite = () => {
    dispatch(favoriteNote(note));
  };

  return (
    <div className="note card-panel left-align">
      <div className="right-align">
        <i
          className={`material-icons ${favorite}`}
          style={{ cursor: "pointer" }}
          onClick={updateFavorite}
        >
          favorite
        </i>
        <i
          onClick={deleteHandler}
          className="material-icons"
          style={{ cursor: "pointer" }}
        >
          delete
        </i>
      </div>
      <h5>{note.title}</h5>
      <p className="truncate">{note.content}</p>
      <p>{date}</p>
      <Link to={`/notes/${note.id}`}>
        <p>Read More </p>
      </Link>
      <div className="right-align">
        <i className="material-icons " style={{ cursor: "pointer" }}>
          edit
        </i>
      </div>
    </div>
  );
}

export default Note;
