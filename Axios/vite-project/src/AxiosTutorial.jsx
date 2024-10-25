import { useEffect } from "react"
import axios from 'axios'

function AxiosTutorial() {
  return (
    <div>AxiosTutorial</div> {
        useEffect(()=> {
            axios.get()
        },[])
    }
  )
}

export default AxiosTutorial