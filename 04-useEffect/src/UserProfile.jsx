import React, { useState } from 'react'

const UserProfile = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);

    console.log(name);
    console.log(age);
    
    

  return (
    <div>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
      <button onClick={() => setName("Rahul")}>Change name</button>
      <button onClick={() => setAge(age + 1)}>Change Age</button>
    </div>
  )
}

export default UserProfile
