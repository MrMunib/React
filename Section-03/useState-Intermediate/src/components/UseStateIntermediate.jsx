import React,{ useState } from "react";

function UseStateIntermediate() {
  let [score, setScrore] = useState(10);
  let [bannded, setBanned] = useState(false);

  return (
    <>
      <h1 className="p-4 text-3xl">{score}</h1>
      <button
        onClick={() => setScrore((prev) => prev + 1)}
        className="px-3 py-2 m-4 text-xs font-semibold bg-blue-900 rounded-md text-zinc-100"
      >
        Change Kro
      </button>
    </>
  );
}

export default UseStateIntermediate;
