import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Loader from './Loader'
import Header from './Header'
import PhotoCard from './PhotoCard'
import axios from 'axios'

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

const Gallery = () => {
  const [galleryData, setGalleryData] = useState(null)

  const fetchNasaApodPhotos = async () => {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&count=25`
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
        <Row xs={1} sm={1} md={2} lg={2} xxl={3}>
          {galleryData.map((photo) => (
            <Col className='col'>
              <PhotoCard className='photo' photo={photo} key={photo.url} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default Gallery
