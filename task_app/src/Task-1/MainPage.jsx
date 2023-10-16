import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';


function MainPage() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="form"
                        element={<Form />} />
                    <Route
                        path="form/:id"
                        element={<Form />} />
                
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainPage