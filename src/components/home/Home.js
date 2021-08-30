import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NodeList from "../notes/NotesList";
function Home() {
  useFirestoreConnect([{ collection: "notes", orderBy: "createdAt" }]);
  const notes = useSelector((state) => state.firestore.ordered.notes);

  return (
    <div className="container">
      <div className="row center-align">
        <div className="col s7">
          <Form />
        </div>
        <div className="col s5">
          <h4>List</h4>
          <NodeList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default Home;
