import React, { useState } from 'react'

function App() {

  let [score,setScrore] = useState(10)
  let [bannded,setBanned] = useState(false)

  return (
    <>
      <h1 className='p-4 text-3xl'>{score}</h1>
      <button onClick={()=>setScrore(200)} className='px-3 py-2 bg-blue-900 text-xs text-zinc-100 m-4 rounded-md font-semibold'>Change</button>

      <h1 className='p-4 text-3xl'>{bannded.toString()}</h1>
      <button onClick={()=>setBanned(!bannded)} className='px-3 py-2 bg-blue-900 text-xs text-zinc-100 m-4 rounded-md font-semibold'>Change</button>
    </>
  )
}

export default App