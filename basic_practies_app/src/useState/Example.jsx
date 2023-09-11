import React from 'react'
import { useState } from 'react'
export default function Example() {
    const [name, setName] = useState('pujan');
    function handleName() {
        setName('Prakhar');
        console.log(name)
        // if (name == "Prakhar") {
        //     setName("pujan");
        //     console.log(name);
        // }
    }
    let style = {
        backgroundColor: "blue",
        color: "white",
        border: "1px solid black",
        padding: 10,
        margin: 10,
        borderRadius: 10    

    }
    return (
        <div>
            <button onClick={handleName} className='btn' style={style}>Click</button>
            <h1 style={{ fontSize: 30 }}>{name}</h1>
        </div>
    )
}
