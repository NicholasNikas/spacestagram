import React from 'react'
import { Image, Iframe } from 'react-bootstrap'

const Photo = ({ photo }) => {
  return (
    <>
      {photo.media_type === 'image' ? (
        <Image src={photo.url} alt={photo.title} className='photo' />
      ) : (
        <iFrame
          title='space-video'
          src={photo.url}
          frameBorder='0'
          gesture='media'
          allow='encrypted-media'
          allowFullScreen
          className='photo'
        />
      )}
      ;
      <div>
        <h1>{photo.title}</h1>
        <p className='date'>{photo.date}</p>
        <p className='explanation'>{photo.explanation}</p>
      </div>
    </>
  )
}

export default Photo
