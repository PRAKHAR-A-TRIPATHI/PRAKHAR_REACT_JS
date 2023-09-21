import React, { useState } from 'react';
// Controlled components are the most common and recommended way to work with forms in React. In this approach, form elements (e.g., input fields, textareas, select boxes) are bound to component state, and React is responsible for handling the form's data flow.
export default function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use inputValue for form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
