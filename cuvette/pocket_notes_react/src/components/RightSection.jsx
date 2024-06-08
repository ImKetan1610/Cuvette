import React, { useEffect, useState } from "react";
import NotesShowingComponent from "./NotesShowingComponent";

const RightSection = ({ selectedNote, notes, setSelectedNote }) => {
  let [selectedNotesData, setSelectedNotesData] = useState(null);

  useEffect(() => {
    let data = notes.filter((ele) => ele.id === selectedNote.id);
    // console.log("9 data", data);
    setSelectedNotesData(data[0]);
  }, [selectedNote.id]);

  return (
    <>
      {selectedNote?.id === null ? (
        <h1>no data</h1>
      ) : (
        <NotesShowingComponent data={selectedNote} goBack={setSelectedNote} />
      )}
    </>
  );
};

export default RightSection;
