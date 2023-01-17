import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Components/auth'
import { useLocation } from 'react-router-dom'
function Login() {
    const location = useLocation()
    const [user , setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
const redirectPath = location.state?.path || '/'
    const handleLogin = ()=>{
        auth.login(user)
        navigate(redirectPath,{replace:true})
    }
  return (
    <div>
        <label>
            UserName : {' '}<input type='text' onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login