import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function UseStateHooks() {

    const [val, setVal] = useState(false)
    
    
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-zinc-300">
        <div className="relative flex h-32 overflow-hidden rounded-md w-60 bg-zinc-100 ">
          <img
            className={`w-full h-full rounded-md ${val === false ? '-translate-x-[0%]' : '-translate-x-[100%]'} transition-transform duration-500 ease-in-out shrink-0 object-fit`}
            src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Alternate text"
          />
          <img
            className={`w-full h-full rounded-md ${val === false ? '-translate-x-[0%]' : '-translate-x-[100%]'} transition-transform duration-500 ease-in-out shrink-0 object-fit`}
            src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D"
            alt="Alternate text"
          />
          <span
          onClick={()=>setVal(()=>!val)}
           className="absolute w-10 h-10 bg-[#dadada7b] rounded-full left-1/2 top-1/2  -translate-x-[50%] -translate-y-[50%] flex justify-center items-center">
            <FaArrowRight size={'.9em'} color="royalblue" />
          </span>
        </div>
      </div>
    </>
  );
}

export default UseStateHooks;
