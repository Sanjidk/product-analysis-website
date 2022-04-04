import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

  const [reviews, setReviews] = useReviews();  

  return (
    <div>
      <h1>Total Reviews: {reviews.length}</h1>
      {
        reviews.map(review => <Review
        key={review.id}
        review={review}
        ></Review>)
      }
           

    </div>
  );
};

export default Reviews;