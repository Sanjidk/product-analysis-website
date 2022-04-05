import React from 'react';
import './Review.css'
import { Card, CardGroup } from 'react-bootstrap';

const Review = (props) => {
  const {name, rating, review} = props.review;
  return (
      <CardGroup className='mt-4 border-0 shadow-lg'>
        <Card className='fw-bold'>
          <Card.Body>
            <Card.Title className='text-primary'>{name}</Card.Title>
            <Card.Text>
              {review}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="fw-bold">Rating : {rating} </small>
          </Card.Footer>
        </Card>
      </CardGroup>
  )
};

export default Review;