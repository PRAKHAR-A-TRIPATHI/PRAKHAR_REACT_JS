import React from 'react'
import About from './about'
import Home from './Home'
import Form from './Form'


export default function RoutingMain() {
    return (
        <div>
            <Router>
                <Link to="">Home </Link>
                <Link to="/about">About </Link>
                <Link to="/forms">Form</Link>
                <Routes>
                    <Route path="" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/forms" Component={Form} />
                </Routes>
                {/* <About />
                <Home />
                <Form /> */}
            </Router>
        </div>
    )
}
