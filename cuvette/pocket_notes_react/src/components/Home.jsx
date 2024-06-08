import React, { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { mockData } from "../utils/mockData.js";

const Home = () => {
  const [showNotesSection, setShowNotesSection] = useState(false);
  const [notesData, setNotesData] = useState(null);

  const [selectedNote, setSelectedNote] = useState({ id: null });
  const selectNote = (id) => {
    console.log(id);
    setSelectedNote(() => notesData.find((ele) => ele.id === id));
    setShowNotesSection(true);
  };

  const goBack = () => {
    setShowNotesSection(false);
  };

  useEffect(() => {
    let localNotes = localStorage.getItem("notesInLS");
    if (localNotes !== null) {
      let data = JSON.parse(localNotes);
      setNotesData(data);
    } else {
      setNotesData(mockData);
    }
  }, []);

  if (notesData === null) {
    return <h1 className="text-3xl font-bold ">Loading...</h1>;
  }

  return (
    <div className="m-4 p-4 relative">
      <div className={`${showNotesSection && "hidden"}`}>
        <LeftSection
          className=""
          notes={notesData}
          setSelectedNote={selectNote}
        />
      </div>

      <div className={`${!showNotesSection && "hidden"}`}>
        <RightSection
          className={`bg-black`}
          selectedNote={selectedNote}
          notes={notesData}
          setSelectedNote={goBack}
        />
      </div>
    </div>
  );
};

export default Home;
