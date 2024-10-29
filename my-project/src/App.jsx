import { useState } from "react"

function App() {
  const [name, setname] = useState('')
  const [password, setPassword] = useState('')
  function handleChange(e ){
    console.log(e.target.value)
    const capname = (e.target.value).toUpperCase();
    setname(capname)
  }

  function paswordChange(e) {
    setPassword(e.target.value)
  }
  return (
<>
<div style={{textAlign: "center"}}>
  <label htmlFor="">First Name</label>
  <input type="text" value={name} onChange={handleChange} /> <br />
  <br />
  <label htmlFor="">passwords</label>
  <input type="text" value={password} onChange={paswordChange} />

</div>
</>  )
}

export default App