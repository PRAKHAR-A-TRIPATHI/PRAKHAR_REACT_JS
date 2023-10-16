import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectRout({ Component }) {
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem("use-info")
        if(!login){
            navigate('/login')
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectRout