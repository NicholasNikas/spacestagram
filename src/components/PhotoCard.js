import React, { useState } from 'react'
import { Card, Button, Image } from 'react-bootstrap'

const PhotoCard = ({ photo }) => {
  const [liked, setLiked] = useState(false)
  const handleLike = () => {
    setLiked(!liked)
  }
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
        {!liked ? (
          <Button variant='primary' onClick={() => handleLike()}>
            Like
          </Button>
        ) : (
          <Button variant='danger' onClick={() => handleLike()}>
            Unlike
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default PhotoCard
