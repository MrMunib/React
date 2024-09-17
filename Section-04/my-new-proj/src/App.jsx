import React, { useState } from 'react'
import UseStateHooks  from './components/useStateHooks'

function App() {

  const [val,setVal] = useState(1)
  return (
    <>

    <UseStateHooks/>
    
    </>
  )
}

export default App