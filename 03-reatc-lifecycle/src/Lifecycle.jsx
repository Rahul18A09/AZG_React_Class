import React, {Component} from "react";

class Demo extends React.Component{
  constructor(){
    super();
    console.log("1.constructor");
  
  }

    componentDidMount(){
    console.log("3. componentDidMount");
    
  }

  render(){
    console.log("2. render");
    return <h1>Hello!</h1>;
    
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component update!");
    
  }

  componentWillUnmount(){
    console.log("Component Removed");
    
  }


}

export default Demo