import React from 'react'
import { useState } from 'react'


export default function MouseEvent() {
    let [event, setEvent] = useState("")
    let [pointer, setPointer] = useState("")
    return (
        <div>
            <h1>MouseEvent handler function</h1>
            <div className="event" style={{ border: "1px solid black", height: "100px", width: "200px" }}
                onClick={e => setEvent('onClick')}
                onMouseEnter={e => setEvent('onMouseEnter')}
                onMouseOver={e => setEvent('onMouseOver')}
                onMouseDown={e => setEvent('onMouseDown')}
                onMouseUp={e => setEvent('onMouseUp')}
                onMouseLeave={e => setEvent('onMouseLeave')}
                
                >
            </div>
            <h1>{event}</h1>
            <h1>PointerEvent handler function</h1>
            <div className="event" style={{ border: "1px solid black", height: "100px", width: "200px" }}
                onPointerEnter={e => setPointer('onPointerEnter')}
                onPointerMove={e => setPointer('onPointerMove')}
                onPointerDown={e => setPointer('onPointerDown')}
                onPointerUp={e => setPointer('onPointerUp')}
                onPointerLeave={e => setPointer('onPointerLeave')}
                >
            </div>  
            <h1>{pointer}</h1>
        </div>
    )
}
