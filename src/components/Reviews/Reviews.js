import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {

  const [reviews, setReviews] = useReviews();  

  return (
    <div>
      <h1>Total Reviews: {reviews.length}</h1>
      <div className='all-reviews-card'>
      {
        reviews.map(review => <Review
        key={review.id}
        review={review}
        ></Review>)
      }
      </div>
           

    </div>
  );
};

export default Reviews;