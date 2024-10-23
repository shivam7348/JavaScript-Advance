import React from 'react'
import ChildA from './props/ChildA'
import ChildB from './props/ChildB'
import ChildC from './props/ChildC'

function App() {
  const name = "XYZ"
  return (
    <>
    <h1>Learning Prop Drilling {name}</h1>
    <ChildA name={name}/>
    
   

    </>
  )
}

export default App