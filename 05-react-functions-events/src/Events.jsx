import React from "react";

const Events = () => {
  // 1.onClick Event
  // const handleClick = () => {
  //   alert("Button was Cliked!");
  // };

  //  2. onChange Event
  // const handleChange = (e) => {
  //   console.clear();
  //   console.log("Value :", e.target.value);
  // };

  // 3. onSubmit Event
  // const handleSubmit = () => {
  //   alert("Form Submitted!");
  // };

  //  4. onMouseEnter Event

  // const whenMouseEnter = () => {
  //   alert("Mouse Entered!");
  // }

  // 5. onMouseLeave Event

  // const whenMouseLeave = () => {
  //   alert("Mouse Leaves!");
  // }



  const handleFocus = () => {
    return <input type="text" onFocus={() => alert("Input focused!")} />;
  }

  return (
    <div>
      <p onMouseEnter={whenMouseEnter}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        exercitationem ullam pariatur rem deserunt explicabo.
      </p>
      <p onMouseLeave={whenMouseLeave}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
        obcaecati dolore tempora ipsa reprehenderit recusandae.
      </p>
      <button onClick={handleClick}>CLick me</button>
      <input type="text" onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <input onKeyDown={handleKeyDown} />;
    </div>
  );
};

export default Events;
