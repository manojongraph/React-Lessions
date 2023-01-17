import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Products() {
  return (<>
    <div>
        <input type='search' placeholder='Search Products'/>
    </div>
    <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products