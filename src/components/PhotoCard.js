import React from 'react'
import { Card, Button } from 'react-bootstrap'

const PhotoCard = ({ photo }) => {
  return (
    <Card id='card' className='m-5 p-5 border border-dark rounded'>
      {photo.media_type === 'image' ? (
        <Card.Img src={photo.url} alt={photo.title} className='image' />
      ) : (
        <iframe
          title='space-video'
          src={photo.url}
          frameBorder='0'
          gesture='media'
          allow='encrypted-media'
          allowFullScreen
          className='video'
        />
      )}
      <Card.Body>
        <Card.Title>{photo.title}</Card.Title>
        <Card.Text>{photo.date}</Card.Text>
        <Card.Text>{photo.explanation}</Card.Text>
        <Button variant='primary'>Like</Button>
      </Card.Body>
    </Card>
  )
}

export default PhotoCard
