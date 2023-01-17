import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  return (
    <>
    <h1>Home</h1>
    <button onClick={()=>navigate('order-summary',{replace:true})}>Place Order</button>
    
  </>)
}

export default Home