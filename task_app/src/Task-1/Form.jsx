import React, { useState, useEffect } from 'react'
import FirstName from './FirstName'
import Lastname from './LastName'
import Number from './Number'
import Email from './Email'
import { useNavigate, useParams } from 'react-router-dom'

function Form() {
    const [comp, setComp] = useState(1);
    const [formData, setFormData] = useState({
        FirstName: '',
        Lastname: '',
        Number: '',
        Email: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/users/${id}`)
                .then((response) => response.json())
                .then((userData) => {
                    setFormData(userData);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const addUserFun = () => {
        fetch("http://localhost:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Failed to add users');
                }
                return response.json();
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const updateUser = () => {
        fetch(`http://localhost:3001/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Failed to update user');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmiit = () => {
        if (id) {
            updateUser()
        } else {
            addUserFun();
        }
        navigate('/');
    }
    const handleNext = () => {
        if (comp < 4) {
            setComp(comp + 1);
        }
    };
    const handlePrevious = () => {
        if (comp > 1) {
            setComp(comp - 1);
        }
    };
    const renderComponent = () => {
        switch (comp) {
            case 1:
                return <FirstName handleNext={handleNext} handleChange={handleChange} formData={formData} />
            case 2:
                return <Lastname handleNext={handleNext} handleChange={handleChange} handlePrevious={handlePrevious} formData={formData} />
            case 3:
                return <Email handleNext={handleNext} handleChange={handleChange} handlePrevious={handlePrevious} formData={formData} />
            case 4:
                return <Number handleNext={handleNext} handleChange={handleChange} handlePrevious={handlePrevious} handleSubmiit={handleSubmiit} formData={formData} />
            default:
                return null;
        }
    }
    return (
        <div>
            {renderComponent()}
        </div>
    )
}

export default Form

