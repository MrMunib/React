import React , {useState} from 'react'

function UseStateAdvanced() {

  const [val, setVal] = useState({name: "Munib", isBanned: false})
  return (
    <>
    <div className="p-4">
    <h1>name : {val.name}</h1>
    <h1>banned : {val.isBanned.toString()}</h1>
    <button
          onClick={()=>setVal({...val, isBanned: !val.isBanned})}
          className="px-3 py-2 m-4 text-xs font-semibold bg-blue-900 rounded-md text-zinc-100">
            Change
    </button>
    </div>
    </>
  )
}

export default UseStateAdvanced