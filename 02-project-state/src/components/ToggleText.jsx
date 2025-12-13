import { useState } from "react"
import "./ToggleText"

const ToggleText = () => {

    const [isVisible, SetIsVisible] = useState(false)

  return (
    <div className="toggle">
     <button onClick={() => SetIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
     </button>

     {isVisible && <p>This is secret message</p>}
     
    </div>
  )
}

export default ToggleText
