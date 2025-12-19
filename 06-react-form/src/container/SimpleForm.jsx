import React, { useState } from 'react';



function SimpleForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
    }

  return (
    <div>
      <h2>React Form Example</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
          type="text" 
          id="name" 
          name="name" 
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default SimpleForm;