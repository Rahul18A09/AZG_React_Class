import React, { useState } from 'react'

const ToggleText = () => {

    const [isVisible, setIsvisible] = useState(false);


  return (
    <div>
      <button onClick={()=> setIsvisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text</button>
    </div>
  )
}

export default ToggleText
