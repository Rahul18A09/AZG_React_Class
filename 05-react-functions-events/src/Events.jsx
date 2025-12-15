import React from "react";

const Events = () => {
  // 1.onClick Event
  const handleClick = () => {
    alert("Button was Cliked!");
  };

  //  2. onChange Event
  const handleChange = (e) => {
    console.clear();
    console.log("Value :", e.target.value);
  };

  // 3. onSubmit Event
  const handleSubmit = () => {
    alert("Form Submitted!");
  };




  
  return (
    <div>
      <button onClick={handleClick}>CLick me</button>
      <input type="text" onChange={handleChange} />

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Events;
