import React, { useState } from "react";


function MultipleInputFrom() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });



const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 
}

const handleChange = (event) => {
    
}
 
    <div>
      <h2>React Form Example</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
            <label htmlFor="age">Age:</label>
            <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
