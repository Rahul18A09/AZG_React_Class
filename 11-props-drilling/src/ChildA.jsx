import React from 'react';

function ChildA(props) {

    const handleClick = () => {
        props.setCount(prevCount => prevCount+1);
    };

    return <button onClick={handleClick}>Increament</button>
}

export default ChildA;