import React from "react";
import useInput from "../../customhook/useInput";
import { addNote } from "../../store/actions/notesAction";
import { useDispatch } from "react-redux";
function Form() {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, content }));
    resetTitle();
    resetContent();
  };
  return (
    <div className="section">
      <div className="row ">
        <form className="col s12" onSubmit={handleSubmit}>
          <h4 className="left-align">New Note</h4>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="first_name2"
                value={title}
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
                value={content}
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
    </div>
  );
}

export default Form;
