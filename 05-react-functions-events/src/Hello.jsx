import React from "react";

const Hello = () => {

  function getName(yourname) {
    return yourname;
  }


  const name1 = "Rahul";
  const name2 = "Asha";

  return (
    <div>
      <h1>Hello {getName(name1)}</h1>
      <h2>Bye {getName(name2)}</h2>
  
    </div>
  );
};

export default Hello;
