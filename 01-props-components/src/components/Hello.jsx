import React from 'react'

// simple props

// const Hello = (props) => {
//   return (
//     <div>
//       <h2>Hello, {props.name}!</h2>
//       <p>age:{props.age}</p>
//       <p>city:{props.city}</p>
//     </div>
//   )
// }


// Destructuring props

const Hello = ({name="Guest",age, city="Unknown", hobbies}) => {
  return (
    <div>
      <h2>Hello,{name}!</h2>
      <p>age:{age}</p>
      <p>city:{city}</p>
      <ul>
        {hobbies.map((hobby, index) =>(
            <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

export default Hello
