import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Task3({ btnArray }) {
    const [clickBtn, setClickBtn] = useState([]);

    const handleButtonClick = (val) => {
        // console.log(clickBtn.length)

        if (clickBtn.includes(val)) {
            setClickBtn(clickBtn.filter((btn) => btn !== val));
        } else {
            if (clickBtn.length > 2) {
                setClickBtn(clickBtn.shift())
            }
            setClickBtn([...clickBtn, val]);  
        }
    };

    return (
        <div>
            <Link to="/">Home</Link> <br />
            <h1>task3</h1>
            {btnArray.map((val) => (
                <button
                    className={`btn ${clickBtn.includes(val) ? 'bg-primary' : 'bg-light'} p-5 m-2`}
                    key={val}
                    onClick={() => handleButtonClick(val)}
                >
                    {val}
                </button>
            ))}
        </div>
    );
}
