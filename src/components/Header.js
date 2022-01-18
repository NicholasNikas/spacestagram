import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <ul>
        <Link className='link' to='/'>
          Return to homepage
        </Link>
      </ul>
    </div>
  )
}

export default Header
