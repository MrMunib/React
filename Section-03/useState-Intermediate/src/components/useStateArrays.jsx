import React, { useState } from "react";

function UseStateArrays() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div className="p-4 font-semibold">
        <div className="btns">
          <button
            onClick={
              // setVal(val.filter((item, index) => [val.length -1]+1))
              () => setVal([...val, val.length + 1])
            }
            className="px-4 py-2 m-2 text-lg text-white bg-blue-800 rounded-md"
          >
            Add
          </button>
          <button
            onClick={() => {
              setVal(val.filter((item, index) => index != val.length - 1));
              // setVal(val.filter((item, index) => item%2 ==0))
              // setVal(val.filter((item, index) => item % 2 !== 0));
            }}
            className="px-4 py-2 m-2 text-lg text-white bg-blue-800 rounded-md"
          >
            Remove
          </button>

          <button
            onClick={() => {
              // setVal(val.filter((item, index) => index != val.length -1))
              setVal(val.filter((item, index) => item % 2 == 0));
              // setVal(val.filter((item, index) => item % 2 !== 0));
            }}
            className="px-4 py-2 m-2 text-lg text-white bg-blue-800 rounded-md"
          >
            Remove Odd
          </button>
          <button
            onClick={() => {
              // setVal(val.filter((item, index) => index != val.length -1))
              // setVal(val.filter((item, index) => item%2 ==0))
              setVal(val.filter((item, index) => item % 2 !== 0));
            }}
            className="px-4 py-2 m-2 text-lg text-white bg-blue-800 rounded-md"
          >
            Remove Even
          </button>
        </div>

          <div className="flex flex-wrap gap-20 p-4 text-3xl bg-zinc-200 items">
            {val.map((elem) => (
              <h2>{elem}</h2>
            ))}
        </div>
      </div>
    </>
  );
}

export default UseStateArrays;
