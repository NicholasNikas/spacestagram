import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

const Gallery = () => {
  const [galleryData, setGalleryData] = useState(null)

  const fetchNasaApodPhotos = async () => {
    // CHANGE TO AXIOS
    // const response = await fetch(
    //   `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&count=10`
    // )

    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&count=10`
    )
    setGalleryData(data)
    console.log(data)
  }

  useEffect(() => {
    fetchNasaApodPhotos()
  }, [])

  return (
    <div className='gallery'>
      <Header />
    </div>
  )
}

export default Gallery
