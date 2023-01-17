import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
function Users() {
    const [searchParam,setSearchParam] = useSearchParams()
    const showActiveUser = searchParam.get('filter') === 'active'
  return (
    <><div>
        <Link to="1">User 1</Link>
        <Link to="2">User 2</Link>
        <Link to="3">User 3</Link>
    </div>
    <Outlet/>
    <div>
        <button onClick={()=> setSearchParam({filter:'active'})}> Active User</button>
        <button  onClick={()=> setSearchParam({})}> Reset Filter</button>
    </div>
    {showActiveUser ? <h2>Showing Active Users</h2>:<h2>Showing All Users</h2>

    }
    </>)
}

export default Users