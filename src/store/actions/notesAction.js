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
