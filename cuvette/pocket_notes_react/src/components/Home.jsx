import React, { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { mockData } from "../utils/mockData.js";

const Home = () => {
  const [showNotesSection, setShowNotesSection] = useState(true);
  const [notesData, setNotesData] = useState(null);

  const [selectedNote, setSelectedNote] = useState({ id: null });
  const selectNote = (id) => {
    console.log(id)
    setSelectedNote(() => notesData.find((ele) => ele.id === id));
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
    <div className="m-0 relative">
      <LeftSection
        className={`${!showNotesSection && "hidden"} `}
        notes={notesData}
        setSelectedNote={selectNote}
      />
      <RightSection
        className={`${showNotesSection && "hidden"} `}
        notes={notesData}
      />
    </div>
  );
};

export default Home;
