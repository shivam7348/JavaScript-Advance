import React, { createContext } from 'react'
import ChildA from './props/ChildA'
import ChildB from './props/ChildB'
import ChildC from './props/ChildC'

// create provider consumer
const data = createContext();

function App() {
  const name = "Shivam"
  return (
    <>
    <h1> Context API</h1>
    <data.Provider value={name}>
      <ChildA/>
     </data.Provider>
   
    
   

    </>
  )
}

export default App
export {data};