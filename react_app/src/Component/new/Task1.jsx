import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Task1({ btnArray }) {
  const [clickBtn, setclickBtn] = useState([]);
  const { id } = useParams();
  let numButtons = Number(id);
 if(!id){
  numButtons=8;
 }
  const handleButtonClick = (val) => {
    if (clickBtn.includes(val)) {
      setclickBtn(clickBtn.filter((btn) => btn !== val));
    } else {
      setclickBtn([...clickBtn, val]);
    }
  };

  return (
    <div>
      <Link to="/">Home</Link> <br />
      <h1>task1</h1>
      <h1>{id} btns</h1>
      {btnArray.slice(0, numButtons).map((val) => (
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
