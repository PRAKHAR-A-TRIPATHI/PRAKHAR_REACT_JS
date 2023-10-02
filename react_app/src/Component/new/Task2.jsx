import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Task2({ btnArray }) {
    const [clickBtn, setclickBtn] = useState();

    return (
        <div>
            <Link to="/">Home</Link> <br />
            <h1>Task 2</h1>
            {btnArray.map((val) => (
                <button
                    className={`btn ${clickBtn === val ? 'bg-primary' : 'bg-light'} p-5 m-2`}
                    key={val}
                    onClick={() => setclickBtn(val)}
                >
                    {val}
                </button>
            ))}
        </div>
    )
}
