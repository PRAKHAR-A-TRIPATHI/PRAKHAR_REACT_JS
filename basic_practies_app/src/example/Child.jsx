import React, { useState } from 'react'

export default function Child(props) {
    console.log("props", props)
    const [state, setstate] = useState("")
    return (
        <React.StrictMode>
            <div>
                <input type="text" value={state} onChange={(e) => setstate(e.target.value)} />
                <button onClick={() => props.fun(state)}>add</button>

                <h2>Child Component</h2>
                <button>click me</button>
            </div>
        </React.StrictMode> 
    )
}
