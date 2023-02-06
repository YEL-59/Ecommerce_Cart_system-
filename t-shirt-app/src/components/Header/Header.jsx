import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (<>
  
  {/* <div>Header</div> */}
    <nav >
        <Link to='/'>Home</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/about'>Abouts</Link>
    </nav>
  
  </>
   
  )
}

export default Header