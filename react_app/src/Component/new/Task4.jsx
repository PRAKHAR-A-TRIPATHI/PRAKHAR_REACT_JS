import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Task4({ obj }) {
    const [clickBtn, setClickBtn] = useState([]);;
    const [data, setData] = useState(Object.entries(obj));
    const [color, setColor] = useState(true)
    useEffect(() => {
        if (clickBtn.length >= 2) {
            let cheak = data.some((item) =>
                item.includes(clickBtn[0]) && item.includes(clickBtn[1])
            );
            console.log(cheak)
            if (cheak) {
                const newArr = data.filter(([key, value]) => {
                    const keyIncluded = clickBtn.includes(key);
                    const valueIncluded = clickBtn.includes(value);
                    return !(keyIncluded || valueIncluded);
                });
                setData(newArr);
                setClickBtn([])
            } else {
                setColor(false)
                // setTimeout(() => {
                //     setClickBtn([])
                // }, 350)
            }
        }
    }, [clickBtn]);
    const handleButtonClick = (val) => {
        setColor(true)
        if (clickBtn.includes(val)) {
            setClickBtn(clickBtn.filter((btn) => btn !== val));
        } else {
            setClickBtn([...clickBtn, val]);
        }
    };
    return (
        <div>
            <h1>Task 4</h1>
            <Link to="/">Home</Link>
            <div>
                {data.flat().map((value, index) => (
                    <button key={index}
                        className={`btn 
                        ${clickBtn.includes(value) ? color ? 'bg-primary' : 'bg-danger' : 'bg-light'
                            } p-5 m-2`}
                        onClick={() => {
                            handleButtonClick(value);
                        }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Task4;