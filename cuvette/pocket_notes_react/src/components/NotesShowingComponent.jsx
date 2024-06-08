import React from "react";
import ProfileName from "./ProfileName";

const NotesShowingComponent = ({ data, goBack }) => {
  const { id, notes } = data;

  return (
    <>
      <ProfileName note={data} goBack={goBack} />
      {notes?.map((ele, i) => (
        <div key={i} className="flex gap-4 border my-2 p-4 rounded-md">
          <div className="text-sm text-slate-500 font-thin">
            <p>{ele.time.time}</p>
            <p>{ele.time.date}</p>
          </div>
          <div>
            <p>{ele.note}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NotesShowingComponent;
