import React, { useState } from "react";

function UseStatePrtc() {
  const [val, setVal] = useState([
    { name: "Ali", age: 22 },
    { name: "Abid", age: 12 },
    { name: "Anjum", age: 25 },
  ]);

  return (
    <>
      <div className="p-3 text-3xl text-center bg-red-300">
        {val.map((elem) => (
          <>
            <h1>Name : {elem.name}</h1>
            <h1>Age : {elem.age}</h1>
            <br />
          </>
        ))}
      </div>

      <button
        onClick={() =>
          setVal(
            val.map((elem) =>
              elem.name === "Ali" ? { name: "Munib", age: 90 } : elem
            )
          )
        }
        className={`px-4 py-1 m-5 text-2xl text-white  bg-blue-900 rounded-md`}
      >
        Change
      </button>
    </>
  );
}

export default UseStatePrtc;
