import React from 'react'
import { useState } from 'react'

export default function InputEvent() {
    let [event, setEvent] = useState("")
    return (
        <div>
            <h3>ClipboardEvent handler function</h3>
            <h3>FocusEvent handler function</h3>
            <input
                onCopy={e => setEvent("on copy")}
                onCut={e => setEvent('onCut')}
                onPaste={e => setEvent('onPaste')}
                onFocus={e => setEvent('onFocus')}
                onBlur={e => setEvent('onBlur')}
                onKeyDown={e => setEvent('onKeyDown')}
                onKeyUp={e => setEvent('onKeyUp')}
            />
            <label>
                First name:
                <input
                    name="firstName"
                    onKeyDown={e => 
                        setEvent(e.key)
                        }
                    onKeyUp={e => setEvent( e.code)}
                />
            </label>    
            <h1>{event}</h1>
        </div>
    )
}
