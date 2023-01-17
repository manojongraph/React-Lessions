import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderSummery() {
    const navigate = useNavigate()
  return (<>
    <h1>Order Confirmed !!</h1>
    <button onClick={()=>navigate('/')}>Back</button>
    <button onClick={()=>navigate(-1)}>Back Button 2</button>

    </>)
}

export default OrderSummery