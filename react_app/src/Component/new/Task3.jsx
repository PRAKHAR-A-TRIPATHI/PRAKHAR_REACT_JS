import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Task3({ btnArray }) {
    const [clickBtn, setclickBtn] = useState([]);

    const handleButtonClick = (val) => {
        if (clickBtn.length <= 2) {
            if (clickBtn.includes(val)) {
                setclickBtn(clickBtn.filter((btn) => btn !== val));
            } else {
                setclickBtn([...clickBtn, val]);
            }
            // console.log(clickBtn)
        } else {
            if (clickBtn.includes(val)) {
                setclickBtn(clickBtn.filter((btn) => btn !== val));
            }
            // console.log(clickBtn)
        }
        // if (clickBtn.includes(val)) {
        //     setclickBtn(clickBtn.filter((btn) => btn !== val));
        // } else {
        //     setclickBtn([...clickBtn, val]);
        // }
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
