import React, { useState } from 'react';

function Update({ user, onUpdate }) {
    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    readOnly
                />
            </label>
            <br />
            <label>
                First Name:
                <input
                    type="text"
                    name="FName"
                    value={formData.FName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    name="LName"
                    value={formData.LName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email_id"
                    value={formData.email_id}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Update</button>
        </form>
    );
}

export default Update;

// https://www.youtube.com/watch?v=Rv3xWokMY5M
// https://www.youtube.com/watch?v=Vjd7oXmCjmg
