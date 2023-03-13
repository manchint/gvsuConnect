import React from 'react';
import { Carousel } from 'react-bootstrap';


const Accommodation = () => {
  return (
 <>
    
  <div className=''>



  <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-100"
          src="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-100"
          src="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>



 
 </>
  );
};

export default Accommodation;
