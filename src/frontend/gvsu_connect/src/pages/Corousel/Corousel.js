import React from 'react';
import { Carousel } from 'react-bootstrap';


const Corousel = (props) => {
  
  return (
 <>
    
  <div className=''>
  <Carousel interval={null}>
      {props.images.map((image => (
          <Carousel.Item interval={null}>
            <img
              className="d-block w-100 h-100"
              src={`data:image/jpeg;base64,${btoa(
                new Uint8Array(image.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ''
                )
              )}`}
              // src={URL.createObjectURL(new Blob([image.data], { type: 'image/jpeg' }))}
              alt="Image"
            />
          </Carousel.Item>
      )))}
    </Carousel>
  </div>



 
 </>
  );
};

export default Corousel;
