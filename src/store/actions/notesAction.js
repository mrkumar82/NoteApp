export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date()
      })
      .then(() => {
        console.log("Then block executed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteNote = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Then block executed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const favoriteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const favorite = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({
        favorite: favorite
      })
      .then(() => {
        console.log("Then block executed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
