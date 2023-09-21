import React, { useEffect, useState } from 'react';

function DataForm({ isOpen, onClose, handlData, rowData, editBtn }) {
    // const [id, setId] = useState(0)
    const [formData, setFormData] = useState({
        id: 0,
        Fname: '',
        Lname: '',
        email: '',
        password: '',
        number: '',
    });
  // set Error
  const [errors, setErrors] = useState({});
    useEffect(() => {
        if (editBtn) {
            setFormData({
                Fname: rowData.Fname,
                Lname: rowData.Lname,
                email: rowData.email,
                password: rowData.password,
                number: rowData.number,
            });
        } else {
            setFormData({
                Fname: '',
                Lname: '',
                email: '',
                password: '',
                number: '',
            });
        }

    }, [rowData, onClose])

    
    // password validation
    const isValidPassword = (password) => {
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const symbolRegex = /[!@#$%^&*()_+/?]/;

        return (
            lowercaseRegex.test(password) &&
            uppercaseRegex.test(password) &&
            numberRegex.test(password) &&
            symbolRegex.test(password)
        );
    };
  
    // console.log(errors)
    // const newErrors = {};
    const onChangeValidForm = (e) => {
        let newErrors = {};
        if (e.target.name === "Fname") {
            if (e.target.value.trim().length < 3) {
                newErrors.Fname = 'Name must be at least three characters.'
            };
        }
        if (e.target.name === "Lname") {
            if (e.target.value.trim().length < 3) {
                newErrors.Lname = 'Name must be at least three characters.'
            }
        }
        if (e.target.name === "number") {
            if (e.target.value.length > 10) {
                newErrors.number = 'Number Legnth to long';
            }
            if (e.target.value.length < 10) {
                newErrors.number = 'Number Legnth to sort';
            }
        }
        if (e.target.name === "password") {
            if (formData.password < 8) {
                newErrors.password = 'Password must be at least 8 characters long.';
            } else if (!isValidPassword(formData.password)) {
                newErrors.password = 'Password must include at least one lowercase letter, one uppercase letter, and one number and one symbol.';
            }
        }
        if(e.target.name==="email"){
            if(!/\S+@\S+\.\S+/.test(e.target.value)){
                newErrors.email = 'Email is not valid'
            }else if(e.target.value.trim()===" "){
                newErrors.email = 'Email is not valid'
            }
        }
        
        // if (e.target.value === "") {
        //     newErrors = {}
        // }
        return newErrors;
    }

    // const validateForm = (formData, Name = '') => {
    //     const newErrors = {};
    
    //     const fieldsToValidate = Name ? [Name] : Object.keys(formData);
    //     // console.log(fieldsToValidate)
    //     fieldsToValidate.forEach((val) => {
    //         if (val === 'Fname' || val === 'Lname') {
    //             if(formData[val].trim()===""){
    //                 newErrors[val] = 'Name is required.';
    //             }else if (formData[val].trim().length < 3) {
    //                 newErrors[val] = 'Name must be at least three characters.';
    //             }
    //         }
    
    //         if (val === 'number') {
    //             console.table(formData[val])
    //             console.log(formData[val])
    //             if(formData[val].trim().length==0){
    //                 newErrors[val] = 'Number is required.';
    //             }else if (formData[val].length > 10) {
    //                 newErrors[val] = 'Number length too long';
    //             } else if (formData[val].length < 10) {
    //                 newErrors[val] = 'Number length too short';
    //             }
    //         }

    //         if (val === 'password') {
    //             if(formData[val].trim()=== ""){
    //                 newErrors[val] = 'PassWord is required.';
    //             }else if (formData[val].trim().length < 8) {
    //                 newErrors[val] = 'Password must be at least 8 characters long.';
    //             } else if (!isValidPassword(formData[val])) {
    //                 newErrors[val] = 'Password must include at least one lowercase letter, one uppercase letter, and one number and one symbol.';
    //             }
    //         }
    
    //         if(val === "email"){
    //             if(formData[val]===""){
    //                 newErrors[val] = 'Email is required.';
    //             }else if(!/\S+@\S+\.\S+/.test(formData[val])){
    //                 newErrors.email = 'Email is not valid'
    //             }
    //         }
    //     });
    
    //     return newErrors;
    // }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // setErrors(validateForm(formData, name));
       setErrors( onChangeValidForm(e))
    };
    
    const validForm = (formData) => {
        const newErrors = {};
        if (formData.Fname.trim() === '') {
            newErrors.Fname = 'First Name is required.';
        } else if (formData.Fname.length < 3) {
            newErrors.Fname = 'Name must be at least three characters.'
        }
        if (formData.Lname.trim() === '') {
            newErrors.Lname = 'Last Name is required.';
        }
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required.';
        }
        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required.';
        } else if (!isValidPassword(formData.password)) {
            newErrors.password = 'Password must include at least one lowercase letter, one uppercase letter, and one number and one symbol.';
        } else if (formData.password.trim() === '') {
            newErrors.password = 'Password is required.';
        } else if (formData.password.trim().length < 8) {
            newErrors.password = 'Password must be at least 8 characters long.';
        }
        if (formData.number === "") {
            newErrors.number = 'Number is required.';
        } else if (formData.number.length > 10) {
            newErrors.number = 'Number Legnth to long';
        } else if (formData.number.length < 10) {
            newErrors.number = 'Number Legnth to short';
        }

        return newErrors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validForm(formData);
        if (Object.keys(newErrors).length === 0) {
            handlData(formData);
            onClose();
            setFormData({
                Fname: '',
                Lname: '',
                email: '',
                password: '',
                number: '',
            });

        } else {
            setErrors(newErrors);
        }
          //     const newErrors = onChangeValidForm();
    // if (Object.keys(newErrors).length > 0) {
    //     setErrors(newErrors);
    // } else {
    //     // Submit the form
    //          handlData(formData);
    //         onClose();
    //         setFormData({
    //             Fname: '',
    //             Lname: '',
    //             email: '',
    //             password: '',
    //             number: '',
    //         });
    //         setErrors({});
    // }
    }

    return (
        <div className={`max-w-md mx-auto w-full  bg-white absolute left-1/3  p-6 rounded-md shadow-md  ${isOpen ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-6">Form</h2>
            <button className="absolute top-6  right-4 text-gray-600" onClick={() => {
                onClose();
                setFormData({
                    Fname: '',
                    Lname: '',
                    email: '',
                    password: '',
                    number: '',
                });
                setErrors({});
            }}><i className="fa-solid fa-xmark fa-2xl"></i></button>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600">First Name</label>
                    <input
                        type="text"
                        id="Fname"
                        name="Fname"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.Fname}
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{errors.Fname}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600">Last Name</label>
                    <input
                        type="text"
                        id="Lname"
                        name="Lname"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.Lname}
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{errors.Lname}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{errors.email}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{errors.password}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="number" className="block text-gray-600">Number</label>
                    <input
                        type="number"
                        id="number"
                        name="number"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.number}
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{errors.number}</p>
                </div>
                <div className="text-center">
                    {
                        editBtn ? <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                        >
                            Update Data
                        </button> : <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Submit
                        </button>
                    }

                </div>
            </form>
        </div>
    );
}

export default DataForm;
    // console.log(formData)
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    //     setErrors({});
    //     let err = onChangeValidForm(e);
    //     setErrors(err)
    // };

    // const validateForm = (data) => {
    //     const errors = {};
      
    //     if (!data.Fname.trim()) {
    //       errors.Fname = 'First Name is required.';
    //     } else if (data.Fname.trim().length < 3) {
    //       errors.Fname = 'Name must be at least three characters.';
    //     }
      
    //     if (!data.Lname.trim()) {
    //       errors.Lname = 'Last Name is required.';
    //     }
      
    //     if (!data.email.trim()) {
    //       errors.email = 'Email is required.';
    //     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    //       errors.email = 'Email is not valid.';
    //     }
      
    //     if (!data.password.trim()) {
    //       errors.password = 'Password is required.';
    //     } else if (data.password.trim().length < 8) {
    //       errors.password = 'Password must be at least 8 characters long.';
    //     } else if (!isValidPassword(data.password)) {
    //       errors.password =
    //         'Password must include at least one lowercase letter, one uppercase letter, one number, and one symbol.';
    //     }
      
    //     if (!data.number) {
    //       errors.number = 'Number is required.';
    //     } else if (data.number.length !== 10) {
    //       errors.number = 'Number must be exactly 10 digits.';
    //     }
      
    //     return errors;
    //   };
      
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newErrors = validateForm(formData);
      
    //     if (Object.keys(newErrors).length === 0) {
    //       handlData(formData);
    //       onClose();
    //       setFormData({
    //         Fname: '',
    //         Lname: '',
    //         email: '',
    //         password: '',
    //         number: '',
    //       });
    //       setErrors({});
    //     } else {
    //       setErrors(newErrors);
    //     }
    //   };

    //     // fetch("http://localhost:3000/users",{
    //     //     method:"POST",  
    //     //     headers:{
    //     //         'Accept':'application/json',
    //     //         'Content-Type':'application/json'
    //     //     },
    //     //     body : JSON.stringify(formData),
    //     // }).then((result)=>{
    //     //     result.json().then((res)=>{
    //     //         console.log(res)
    //     //     })
    //     // })
    //     // console.log(formData);

    //     //    validation in Form

    //     // if (formData.Fname.trim() === "") {
    //     //     newErrors.Fname = 'First Name is required.';
    //     //     setErrors(newErrors);

    //     //     // console.log(errors)
    //     // } else if (formData.Lname.trim() === "") {
    //     //     newErrors.Lname = 'Last Name is required.';
    //     //     setErrors(newErrors);
    //     // } else if (formData.email === "") {
    //     //     newErrors.email = 'Email is required.';
    //     //     setErrors(newErrors);
    //     // } else if (formData.email === "") {
    //     //     newErrors.email = 'Invalid email address.';
    //     //     setErrors(newErrors);
    //     // } else if (formData.password === "") {
    //     //     newErrors.password = 'Password is required.';
    //     //     setErrors(newErrors);
    //     // }
    //     // else if (!isValidPassword(formData.password)) {
    //     //     newErrors.password = 'Password must include at least one lowercase letter, one uppercase letter, and one number and one symbol.';
    //     //     setErrors(newErrors);
    //     // } else if (formData.password < 8) {
    //     //     newErrors.password = 'Password must be at least 8 characters long.';
    //     //     setErrors(newErrors);
    //     // } else if (formData.number === "") {
    //     //     newErrors.number = 'Number is required.';
    //     //     setErrors(newErrors);
    //     // } else if (formData.number === "") {
    //     //     newErrors.number = 'Number is required.';
    //     //     setErrors(newErrors);
    //     // } else if (formData.number.length > 10 || formData.number.length < 10) {
    //     //     newErrors.number = 'Number length not required.';
    //     //     setErrors(newErrors);
    //     // }
    //     // else {
    //     //     handlData(formData);
    //     //     onClose();
    //     //     setFormData({
    //     //         Fname: '',
    //     //         Lname: '',
    //     //         email: '',
    //     //         password: '',
    //     //         number: '',
    //     //     });
    //     //     console.log(Object.keys(errors).length)
    //     // }
    //     // setId(id+1);
    //     // setFormData({
    //     //     Fname: '',   
    //     //     Lname: '',
    //     //     email: '',
    //     //     password: '',
    //     //     number: '',
    //     // });
    // };