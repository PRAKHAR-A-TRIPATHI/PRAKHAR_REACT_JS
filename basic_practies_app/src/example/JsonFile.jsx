import React, { useEffect, useState } from 'react';
import Update from './Update'; // Make sure the Update component is correctly defined and imported

export default function JsonFile() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch data from your JSON server
    fetch('http://localhost:3000/users') // Update the URL to match your API
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleUpdate = (updatedUser) => {
    // Send a PUT request to update the user data on your API
    fetch(`http://localhost:3000/users/${updatedUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        // Update the data in your state
        const updatedUsers = data.map((user) =>
          user.id === updatedData.id ? updatedData : user
        );
        setData(updatedUsers);
        setSelectedUser(null); // Clear the selected user after updating
      })
      .catch((error) => console.error(error));
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>FName</th>
            <th>LName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={index}>
              <td>{val.id}</td>
              <td>{val.Fname}</td>
              <td>{val.Lname}</td>
              <td>{val.email_id}</td>
              <td>
                <button onClick={() => handleEditClick(val)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
          <h2>Edit User</h2>
          {/* Assuming you have an Update component */}
          <Update user={selectedUser} onUpdate={handleUpdate} />
        </div>
      )}
    </div>
  );
}
