import React, { useEffect, useState, } from 'react'
import Header from './components/Header'
import { Button } from '@material-tailwind/react'
import UseEffect from './components/UseEffect'

function App() {
 const [count, setCount]= useState(0)
 const [data, setData] = useState("Ram")


  useEffect( () => {
    console.log("mounted")
  },[data])

 function updateState() {
  setCount ( count + 1)
 }

 function updateData() {
   setData( "hello")
 }

  return (
    <>
     <div>
       <h1>Learning State {count}</h1>
       <Button onClick={updateState}>ClickMe</Button>
       <button onClick={updateData}>UpdateData</button>
    </div>
    <UseEffect/>
    </>
   
  )
}

export default App