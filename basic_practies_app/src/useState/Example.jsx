import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
export default function Example() {
    // const [name, setName] = useState('pujan');
    let [count, setCount] = useState(0)
    let ref = useRef()
    // console.log(ref)
    function handleName() {
        // setName('Prakhar');
        // console.log(name)
        // if (name == "Prakhar") {
        //     setName("pujan");
        //     console.log(name);
        // }
        // ref.current.push(1);
        // console.log(ref)
        setCount(count + 1)
    }
    // useEffect(() => {
    //     console.log('run')  
    //     return () => {
    //         console.log('clean')
    //     };      
    // }, []);
    // useEffect(() => {
    //     console.log(`useEffect called ${count}`);
    // }, [count===3]);
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
            <h1>{count}</h1>
            <button ref={ref} onClick={handleName} className='btn' style={style}>Click</button>
            <h1 style={{ fontSize: 30 }}>{name}</h1>
        </div>
    )
}
