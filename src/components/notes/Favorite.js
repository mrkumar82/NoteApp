import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import FavoriteList from "./FavoriteList";

function Favorite() {
  useFirestoreConnect([
    {
      collection: "notes",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favnotes"
    }
  ]);

  const favnotes = useSelector((state) => state.firestore.ordered.favnotes);

  console.log("tests", favnotes);

  return (
    <div>
      <FavoriteList favnotes={favnotes} />
    </div>
  );
}

export default Favorite;
