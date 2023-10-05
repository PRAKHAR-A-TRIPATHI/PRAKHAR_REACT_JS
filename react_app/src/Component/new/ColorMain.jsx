import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task1 from './Task1';
import Task2 from './Task2';
import Home from './Home';
import Task3 from './task3';
import Task4 from './Task4';

export default function ColorMain() {
    let btnArray = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8"];
    let obj  ={
        india:"delhi",
        Canada:"toranto",
        America:"washington DC",
        Gujrat:"gandhinagar"
    }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="task1"
                        element={<Task1 btnArray={btnArray} />} />
                    <Route
                        path="/task1/:id" 
                        element={<Task1 btnArray={btnArray} />} />
                    <Route
                        path='task2'
                        element={<Task2 btnArray={btnArray} />} />
                    <Route
                        path='task3'
                        element={<Task3 btnArray={btnArray} />} />
                    <Route
                        path='task4'
                        element={<Task4 obj={obj} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
