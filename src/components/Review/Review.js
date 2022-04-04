import React from 'react';

const Review = (props) => {
  const {name, rating, review} = props.review;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Review;