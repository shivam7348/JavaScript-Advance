import React from 'react'
import ChildC from './ChildC'
import { data } from '../App'

function ChildB() {
  return (
   <>
   <data.Consumer>
    {
      (name) => {
        return (
          <h1> Hello My name Satyam & {name}</h1>
        )
      }
    }
   </data.Consumer>
   </>
  )
}

export default ChildB