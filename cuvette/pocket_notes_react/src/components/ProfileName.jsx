import React from "react";

const ProfileName = ({ note, setSelectedNote, isShow = true, goBack }) => {
  const { id, groupName, color } = note;
  
  let groupDP = "";
  let nameArray = groupName.split(" ");
  groupDP = nameArray.map((ele) => ele[0]).join("");

  const passId = () => {
    setSelectedNote(id);
  };

  return (
    <>
      <div
        className="flex gap-4 items-center my-2 ml-2 py-2 cursor-pointer p-4 border rounded-full bg-slate-100"
        key={id}
        onClick={passId}
      >
        {isShow && (
          <p
            className="font-bold text-2xl"
            onClick={() => {
              goBack(null);
            }}
          >
            ←
          </p>
        )}
        <div
          className={`text-white font-semibold w-[50px] h-[50px] p-4 rounded-full bg-[${color}]`}
          style={{ backgroundColor: color }}
        >
          {groupDP}
        </div>
        <div className="font-semibold">{groupName}</div>
      </div>
    </>
  );
};

export default ProfileName;
