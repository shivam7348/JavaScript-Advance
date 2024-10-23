import React, { useRef, useState } from 'react'

function UseRef() {
    const refElement = useRef("")
    const [name, setName] = useState("Shivam")
    const reset = () => {
        setName("")
        refElement.current.focus()
    }

  return (
   <>
   <h1> Learning React</h1>
   <input ref={refElement} type='text' value={name} onChange={(e) => setName(e.target.value)}/>
   <button onClick={reset}>Reset</button>

   </>
  )
}


export default UseRef