import React from 'react';
import { Carousel } from 'react-bootstrap';


const Corousel = (props) => {
  
  return (
 <>
    
  <div className=''>
  <Carousel interval={null}>
    <Carousel.Item interval={null}>
            <img
              className="d-block w-100 h-100"
              src={`data:image/jpeg;base64,${props.image}`}
              src="https://i.stack.imgur.com/ITVv2.png"
              alt="Image"
            />
          </Carousel.Item>
      {/* {props.images.map((image => (
          
      )))} */}
    </Carousel>
  </div>



 
 </>
  );
};

export default Corousel;
