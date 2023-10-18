import React from 'react'
import Rout from './rout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Content from './Content'
import User from './User'
import Longin from './Longin'
import ProtectRout from './ProtectRout'
import Profile from './Profile'
// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<Rout/>,
//         children:[  
//             {
//                 path:"",
//                 element:<Home/>
//             },
//             {
//                 path:"about",
//                 element:<About/>
//             },
//             {
//                 path:"contact",
//                 element:<Content/>
//             }
//         ]
//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Rout />}>
                {/* <Route path='' element={<Home/>} /> */}
                <Route path='' element={<ProtectRout Component={Home} />} />
                <Route path='/login' element={<Longin />} />
                <Route path='/about' element={<ProtectRout Component={About} />} />
                <Route path='/contact' element={<ProtectRout Component={Content} />} />
                <Route path='/Profile' element={<ProtectRout Component={Profile} />} />
                <Route path='user/:userid' element={<User />} />
                <Route path='user' element={<User />} />
            </Route>
        </>

    )
)

export default function RoutingMain() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
//  {/* <Router>
//                 <Link to="">Home </Link>
//                 <Link to="/about">About </Link>
//                 <Link to="/forms">Form</Link>
//                 <Routes>
//                     <Route path="" Component={Home} />
//                     <Route path="/about" Component={About} />
//                     <Route path="/forms" Component={Form} />
//                 </Routes>
//                 {/* <About />
//                 <Home />
//                 <Form /> */}
//                 </Router>