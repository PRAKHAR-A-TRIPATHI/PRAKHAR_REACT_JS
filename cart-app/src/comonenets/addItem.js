import React, { useState } from 'react';

function AddItem(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || price === "") {
            alert("Please fill all the fields");
        } else {
            props.add(name, price);
            setName(''); // Clear the input field after submission
            setPrice(''); // Clear the input field after submission
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 ">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(Number(e.target.value))}></input>
            </div>

            <button type="submit" className="btn btn-primary" >Add</button>
        </form>
    )
}

export default AddItem