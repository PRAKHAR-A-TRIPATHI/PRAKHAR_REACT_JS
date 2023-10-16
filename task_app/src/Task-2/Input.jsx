import React from 'react';

function Input({ type, name, formik, id=false, toggleType }) {
    return (
        <div className="mb-4">
            <label className="block text-gray-600">{name}</label>
            <input
                type={type}
                name={name}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={id ? true : false}
            />
            {formik.errors[name] && formik.touched[name] ? <p className="text-red-600">{formik.errors[name]}</p>:null}
            {toggleType && (
                <button
                    className="btn top-50 end-100"
                    type="button"
                    onClick={toggleType}
                >
                    {type === 'password' ? '😑' : '🙄'}
                </button>
            )}
        </div>
    );
}

export default Input;
