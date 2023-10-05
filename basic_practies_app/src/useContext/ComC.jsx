import React, { useContext } from 'react';
import { array, data } from './CompA';
import ComD from './comD';

function ComC() {
  const first = useContext(data);
  const Buttons = useContext(array);

  return (
    <div>
      ComC {first.b}
      {
        Buttons.map((val, index) => (
          <button key={index} className='btn p-2 m-2 bg-orange-500 text-white text-lg rounded-lg' onClick={first.abc}>
            {val}
          </button>
         ) )
      }
      <ComD/>
    </div>
  );
}

export default ComC;
