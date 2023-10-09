import React, { useState } from 'react';

function From() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("hi")
    fetch(`http://localhost:3000/users?q=${searchTerm}`)
    // fetch(`http://localhost:3000/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h1>Search Users</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((user) => (
          <li key={user.id} className=' bg-green-300' >{user.Fname}</li>
        ))}
      </ul>
    </div>
  );
}

export default From;
