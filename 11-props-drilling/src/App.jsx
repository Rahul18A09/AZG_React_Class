import React from 'react';
import OuterBox from './OuterBox';


function Parent() {
  const username = "Rahul";
  return <Child name={username}/>
}

function Child({name}) {
return <GrandChild name={name}/>
}


function GrandChild({name}){
  return <h3 style={{color:"blue"}}>My name is {name}.</h3>
}

function App(props) {
  return (
    <div>
      {/* <Parent/> */}
      <OuterBox/>
    </div>
  );
}

export default App;