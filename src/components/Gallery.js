import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import Header from './Header'
import Photo from './Photo'
import axios from 'axios'

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

const Gallery = () => {
  const [galleryData, setGalleryData] = useState(null)

  const fetchNasaApodPhotos = async () => {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&count=10`
    )
    setGalleryData(data)
  }

  useEffect(() => {
    fetchNasaApodPhotos()
  }, [])

  return (
    <div className='gallery'>
      <Header />
      {!galleryData ? (
        <Loader />
      ) : (
        <div>
          {galleryData.map((photo) => (
            <Photo photo={photo} key={photo.url} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery
