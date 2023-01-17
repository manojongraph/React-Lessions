import React from 'react'
import { useParams } from 'react-router-dom'
function UserDetails() {
    const PARAMS = useParams()
    const USER_ID = PARAMS.userId
  return (
    <h1>Details About User {USER_ID} </h1>
  )
}

export default UserDetails