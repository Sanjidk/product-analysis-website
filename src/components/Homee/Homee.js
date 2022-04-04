import React from 'react';
import canon from './canon1200d.jpg';
import { Button } from 'react-bootstrap';

const Homee = () => {
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
      <div>

      </div>
    </div>
  );
};

export default Homee;