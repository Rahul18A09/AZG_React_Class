import React from 'react'
import Hello from './components/Hello';
import Button1 from './components/Button1';
import Hello1 from './components/Hello1';
import Bye from './components/Bye';

const App = () => {

  const hobbies = ["Reading", "Coding", "Traveling"];

  function Message(){
    alert("Hello From message Box");
  }

  function ByeMessage(){
    alert("Hello From Bye message box.")
  }

  return (
    <div>
   
      <Hello name="Rahul" age={25} city="Navsari" hobbies={hobbies}/>
     <Button1 label="Click Me" handleClick={Message}/>
     <Button1 label="Just Click" handleClick={ByeMessage}/>
     <Hello1/>
     <Bye/>
    
    </div>
  )
}

export default App
