import React from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from './Validation';


const initialValues = {
    name: '',
    email: '',
    message: '',
    passwords: '',
    ConfirmPasswords: '',
    message:''
};

function FormikMain() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values,action) => {
            console.log(values);
            action.resetForm()
        },
    });

    return (
        <div>
            <div className="container bg-white mx-auto p-4">
                <h1 className="text-3xl">Form Validation</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.name && touched.name ?<p className=' text-red-600'>{errors.name}</p>:null}
                    </div>
                    <div>
                        <label htmlFor="email" className="block">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.email && touched.email ?<p className=' text-red-600'>{errors.email}</p>:null}
                    </div>
                    <div>
                        <label htmlFor="passwords" className="block">
                            Passwords
                        </label>
                        <input
                            type="password"
                            id="passwords"
                            name="passwords"
                            value={values.passwords}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.passwords && touched.passwords ?<p className=' text-red-600'>{errors.passwords}</p>:null}
                    </div>
                    <div>
                        <label htmlFor="ConfirmPasswords" className="block">
                            Confirm Passwords
                        </label>
                        <input
                            type="password"
                            id="ConfirmPasswords"
                            name="ConfirmPasswords"
                            value={values.ConfirmPasswords}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                          {errors.ConfirmPasswords && touched.ConfirmPasswords ?<p className=' text-red-600'>{errors.ConfirmPasswords}</p>:null}
                    </div>
                    <div>
                        <label htmlFor="message" className="block">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        ></textarea>
                        
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormikMain;
