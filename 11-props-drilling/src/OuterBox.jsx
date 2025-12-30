import React, { useState } from 'react';


function OuterBox(props) {

    const [text, setText] = useState('');

    return (
        <div>
            <InnerBox onChange={setText}/>
            <Display value={text}/>
      
            
        </div>
    );
}


function InnerBox({onChange}) {

    return <input type='text' onChange={(e) => onChange(e.target.value)}/>
}


function Display({value}){
return <h3>Typed: {value}</h3>

}

export default OuterBox;