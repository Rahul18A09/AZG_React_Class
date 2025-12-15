import React from "react";

const Hello = () => {

  const getName = (yourname) => {
    return yourname;
  }


  const handleClick = () => {
    alert("Button was Cliked!")
  }


  const handleInput = (event) => {
    console.clear();
    console.log("Value :", event.target.value);
    
  }


  const handleMouseOver = () => { console.log("The Mouse Over the text!");}
  const handleDoubleClick = () => { console.log("Text Double clicked!");}

 

  const name1 = "Rahul";
  const name2 = "Asha";

  return (
    <div>
      <h1>Hello {getName(name1)}</h1>
      <h2>Bye {getName(name2)}</h2>
      <p onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet.</p>
      <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quos?</p>
      <button type="button" onClick={handleClick}>Click me</button>
      <button onClick={() => alert("Hello Rahul Bharada!")}>Say Hello</button>
      <input type="text" onChange={handleInput}/>
  
    </div>
  );
};

export default Hello;
