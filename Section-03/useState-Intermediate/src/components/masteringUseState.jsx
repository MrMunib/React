import React, { useState } from "react";

function MasteringUseState() {
  const [val, setVal] = useState({ name: "Munib", isBanned: false });
  return (
    <>
      <div className="p-4">
        <h1>name : {val.name}</h1>
        <h1>banned : {val.isBanned.toString()}</h1>
        <button
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
          className={`px-4 py-1 mt-2 text-lg text-white ${
            !val.isBanned ? "bg-blue-600" : "bg-red-600"
          } rounded-full`}
        >
          Change
        </button>
      </div>
    </>
  );
}

export default MasteringUseState;
