import React, { createContext } from 'react'
import ChildA from '../src/props/ChildA'

function App() {
  const name = "Pogo"
  const data = createContext();
  return (
    
    <>
    <data.Provider value={name}>
      <ChildA/>
    </data.Provider>
    
    </>
  )
}

export default App
export {data}
