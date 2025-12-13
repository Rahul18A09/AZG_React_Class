import React from 'react'

const Hello1 = () => {


    const fruits = ["apple", "banana", "Orange"]

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index)=>(
            <li>{index}-{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default Hello1
