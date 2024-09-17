import React, { useState } from "react";

function MasteringUseStateP2() {
  const [val, setVal] = useState({ name: "Munib", age: 24 });
  return (
    <>
      <div className="p-5">
        <button
          onClick={() => {
            setVal({ ...val, gender: "male" });
            console.log(val);
          }}
          className="px-4 py-2 font-semibold bg-red-200 rounded-md"
        >
          Click Me
        </button>
        <p>Check Console to see how code is working</p>
      </div>
    </>
  );
}

export default MasteringUseStateP2;

// useState state ko instantly update nhi krta , wo useState ko update krta wo apny hisab sy function completion function ke bad to fix performance issues
