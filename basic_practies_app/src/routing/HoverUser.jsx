import React from 'react'
import { useNavigate } from 'react-router-dom';

function HoverUser({ setIsHovered }) {
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('use-info'));
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const logOutFun = () => {
       let a= confirm("are you Sure")
        // console.log(confirm)
        if(a){
            localStorage.removeItem('use-info')
            navigate("/login")
        }
       
    }
    return (
        <div className="p-4 bg-white border rounded shadow-md absolute top-20  right-10 " onMouseLeave={handleMouseLeave}>
            <h1 className=' text-black p-1 '>Name:{user && user.name}</h1>
            <h1 className=' text-black p-1 '>Email:{user && user.email}</h1>
            <h1 className=' text-black p-1 '>Number:{user && user.tel}</h1>
            <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            onClick={()=>navigate("/Profile")}>Profile</button>
            <button
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                onClick={logOutFun}
            >
                log Out
            </button>
        </div>
    )
}

export default HoverUser