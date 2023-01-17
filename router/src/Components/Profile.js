import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
function Profile() {
    const navigate = useNavigate()
    const auth = useAuth()
    const handleLogout = ()=>{
        auth.logout()
        navigate('/')
    }
  return (<>
    <div>Welcom {auth.user}</div>
    <button onClick={handleLogout}>Logout</button>
    </>)
}

export default Profile