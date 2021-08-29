import React from "react";
import useInput from "../../customhook/useInput";

function Form() {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const handleSubmit = (e) => {
    e.preventDefault();

    resetTitle();
    resetContent();
  };
  return (
    <div className="section">
      <div className="row ">
        <form className="col s6" onSubmit={handleSubmit}>
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
            <div className="input-field col s12">
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
