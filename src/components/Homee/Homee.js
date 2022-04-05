import React from 'react';
import canon from './canon1200d.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import useReviews from '../../hooks/useReviews';

const Homee = () => {

  const [reviews, setReviews] = useReviews();
  const  sliceReview = reviews.slice(0, 3);

  return (
    <div>
      <div>
        <main className='d-flex mx-5 gap-5 align-items-center'>
          <section className='text-start'>
            <h1 className='fw-bold'> DSLR CANON 1200D </h1>
            <p className='fw-normal'>The dynamic range of the Canon 1200D is just as good as that of the more expensive Canon SLR cameras with an APS-C sensor. It is noticeably better than the dynamic range of a smartphone or compact camera, but a bit lower than the dynamic range of the most modern cameras from Nikon, Olympus or Panasonic.</p>
            <Button>See More</Button>
          </section>
          <section>
            <img src={canon} alt="" />
          </section>
        </main>
      </div>
      <div className='mb-3'>
        <h1 className='fw-bold'>Customer Reviews ({sliceReview.length})</h1>
        <div className='all-reviews-card'>
        {
          sliceReview.map(review => <Review
          key={review.id}
          review={review}
          ></Review>)
        }
        </div>
        <Link to='/reviews'>
          <Button>See All Reviews</Button>
        </Link>
      </div>
    </div>
  );
};

export default Homee;