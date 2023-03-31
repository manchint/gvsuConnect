import React from 'react';
import { Carousel } from 'react-bootstrap';


const Accommodation = (props) => {
  const arrayBufferToBase64 = (bufferArray) => {
    // var binary = '';
    // var bytes = [].slice.call(new Uint8Array(buffer));
    // bytes.forEach((b) => binary += String.fromCharCode(b));
    // const base64String = `data:image/jpeg;base64,${window.btoa(String.fromCharCode(...new Uint8Array(bufferArray)))}`;
    // //var base64String = 'data:image/png;base64,'+window.btoa(String.fromCharCode(...new Uint8Array(buffer)));
    // return base64String;
    
  }
  
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

export default Accommodation;
