import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Heart from 'react-animated-heart'

const PhotoCard = ({ photo }) => {
  const [isClick, setClick] = useState(false)

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
        <Row className='d-flex align-items-center p-0'>
          <Col>
            <p id='like-button'>Like</p>
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default PhotoCard
