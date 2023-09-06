import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    let [text, setText] = useState("enter Text Heare");
    let change = () => {
        let a = text.split("").filter(val => (val === "a" || val === "b")).join("").toUpperCase();
        setText(a)
    }
    let onChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" aria-describedby="emailHelp" value={text} onChange={onChange} ></textarea>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <button className='btn btn-primary' onClick={change}>CONVET TO UPPERCASE</button>
            </div>
        </div>
    )
}
