import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NasaLogo from './images/nasa-logo-web-rgb.png'
import ShopifyLogo from './images/shopify-logo.png'

const HomePage = () => {
  return (
    <div className='home'>
      <p className='home-title'>Spacestagram</p>
      <Image className='nasa-logo' fluid src={NasaLogo} />
      <Link className='link' to='/gallery'>
        Click here to see photo gallery
      </Link>
      <p className='home-description'>
        Shopify Frontend Intern Coding Challenge by Nicholas Nikas
      </p>
      <Image className='shopify-logo' fluid src={ShopifyLogo}></Image>
    </div>
  )
}

export default HomePage
