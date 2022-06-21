import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, useClick = () => {  } }) {
  
  return (
    <button className={ isActive ? "chip active" : "chip"} onClick={useClick} >
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
