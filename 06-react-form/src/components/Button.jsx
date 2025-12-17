import React from 'react'

const Button = ({onSubmit}) => {
  return (
    <div>
      <button type='submit' onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Button
