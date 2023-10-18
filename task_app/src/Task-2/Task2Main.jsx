import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FormValid from './FormValid';
import Formik from './Formik';
import Formiks from './Formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Task2Main() {
    return (
        <div>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="AddUsers/:id"
                        element={<Formiks />} />
                    <Route
                        path="AddUsers"
                        element={<Formiks />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Task2Main