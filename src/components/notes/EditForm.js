import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "../../store/actions/notesAction";
import useInput from "../../customhook/useInput";
import { useHistory } from "react-router-dom";
function EditForm() {
  const note = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetContent] = useInput(note.content);
  const history = useHistory();
  const handleSubmit = () => {
    dispatch(updateNote({ id: note.id, title, content }));
    history.push("/");
  };
  return (
    <div className="container section">
      <h2>Edit Form</h2>
      <form className="col s12" onSubmit={handleSubmit}>
        <h4 className="left-align">New Note</h4>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="first_name2"
              value={note.title}
              type="text"
              className="validate"
              {...bindTitle}
            />
            <label className="active" htmlFor="first_name2">
              Title
            </label>
          </div>
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              value={note.content}
              {...bindContent}
            ></textarea>
            <label htmlFor="textarea1">Content</label>
          </div>
          <div className="input-field col s12 left-align">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
