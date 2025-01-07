import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 bg-slate-950 rounded-md border-blue-400 border-2  border-solid blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
