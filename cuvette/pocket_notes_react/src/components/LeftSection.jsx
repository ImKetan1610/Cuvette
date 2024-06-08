import React from "react";
import ProfileName from "./ProfileName";

const LeftSection = ({ notes, setSelectedNote }) => {
//   console.log(setSelectedNote);
  return (
    <div>
      <p className="font-bold text-3xl text-left m-0">Pocket Notes</p>
      <button className="w-full my-3 py-2 font-semibold text-lg bg-black rounded-full text-white">
        + Create Notes Group
      </button>
      {notes.map((note) => (
        <ProfileName
          key={note.id}
          note={note}
          setSelectedNote={setSelectedNote}
        />
      ))}
    </div>
  );
};

export default LeftSection;
