import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent1(props) {
    const [count, setCount]= useState(0);

    return (
        <div>
            <ChildA setCount={setCount}/>
            <ChildB count={count}/>
        </div>
    );
}

export default Parent1;