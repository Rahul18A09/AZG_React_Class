import React from 'react'

const Events3 = () => {


// 10. onScroll Event

const handleScroll = () => {
    console.log("Scrolling...");
    
}


  return (
    <div onScroll={handleScroll} style={{height:"100px", overflow:"scroll"}}>
      
      <p>Scroll this content</p>
      <p>More content</p>
      <p>Even more content</p>
    </div>
  );
}

export default Events3
