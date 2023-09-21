import React, { useState } from 'react'
import Child from './Child';

export default function Solution1() {
    let [setCount, count] = useState(0);
    var [a, b] = useState(0);
    const [cout] = useState(0);
    const [, stecout] = useState(0);

    function child(name) {
        console.log(name)
    }
    return (

        <div>
            <Child fun={child} />
            <div>
                {["<div>Hello</div>", "<h1>hi</h1>"]}
            </div>

            <h1>{setCount}</h1>
            <button onClick={() => count(setCount + 1)}>addds</button>
            <h1>{a}</h1>
            <button onClick={() => b(a + 1)}>addds</button>
            <h1>{cout}</h1>
            <h1>{stecout}</h1>
        </div>
    )
}

