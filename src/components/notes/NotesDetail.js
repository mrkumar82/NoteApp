import React from "react";
import { useFirestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import moment from "moment";
function NotesDetail(props) {
  const noteid = props.match.params.id;

  useFirestoreConnect([
    { collection: "notes", doc: noteid } // create todo listener
  ]);

  const note = useSelector(
    ({ firestore: { data } }) => data.notes && data.notes[noteid]
  );
  const noteMarkup = !isLoaded(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Loading...</div>
        </div>
      </div>
    </div>
  ) : isEmpty(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">No data found...</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">{note.title}</div>
          <p>{note.content}</p>
          <div className="grey-text">
            {moment(note.createdAt.toDate()).calendar()}
          </div>
        </div>
      </div>
    </div>
  );

  return noteMarkup;
}

export default NotesDetail;
