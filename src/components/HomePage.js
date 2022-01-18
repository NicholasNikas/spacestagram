import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='home'>
      <Link className='home-link' to='/gallery'>
        See photo gallery
      </Link>
    </div>
  )
}

export default HomePage
