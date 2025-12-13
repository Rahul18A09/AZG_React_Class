import React from 'react'

const Button1 = ({label, handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default Button1
