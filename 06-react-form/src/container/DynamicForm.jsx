import React, { useState } from 'react';

function DynamicForm(props) {
    const [feilds, setFeilds] = useState([""]);

    function addFeild() {
        setFeilds([...feilds, ""]);
    }

    function handleSubmit(event) {

        event.preventDefault();

        console.log(feilds);
    }

    function handleInput(value, index) {

        let updatedFeilds = [...feilds];
        updatedFeilds[index] = value;
        setFeilds(updatedFeilds);
    }

    //Add function to remove show
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <div className='card p-4 shadow-lg'>
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div className='row'>
                                {/* Add static fields here */}
                                {
                                    // Modify logic to apply map() on array
                                    feilds.map((feild, index) => {
                                        return (
                                            <div className='col-12'>
                                                <div className='mt-4 d-flex justify-content-center gap-3 w-100'>
                                                    <input type="text" onChange={(event) => handleInput(event.target.value, index)} placeholder={'Feilds' + (index + 1)} name={'Feilds' + (index + 1)} id={'Feilds' + (index + 1)} className='w-100' />
                                                    <button className='btn btn-success'type='button'>+</button>
                                                    <button className='btn btn-danger' type='button'>-</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className='col-12'>
                                    <div className='mt-4 d-flex justify-content-center'>
                                        <button className='btn btn-primary' type='submit'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DynamicForm;