import React, { useState } from 'react'
import From from './From';

function CrudeMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape',
    'Kiwi',
    'Lemon',
  ]);

  const filteredItems = items.filter((item) => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredItems)
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <div>
        <h1>Search Array</h1>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <From />
    </div>
  )
}

export default CrudeMain


