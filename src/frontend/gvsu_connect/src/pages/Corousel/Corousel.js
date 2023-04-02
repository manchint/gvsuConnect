import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Corousel = (props) => {

  const [imageLinks, setImageLinks] = useState([])

  useEffect(() => {
    if(props.places !== undefined) {
      setImageLinks(props.image.split(";"));
    } else {
      setImageLinks([...imageLinks,`http://localhost:3001/${props.image}`])
    }
  }, [])
  
  return (
 <>
    {imageLinks.length > 0 && (
        <div className=''>
        <Carousel interval={null}>
        {imageLinks.map((link) => (
          <Carousel.Item interval={null}>
                  <img
                    className="d-block w-100 h-100"
                    src={link}
                    alt="Image"
                  />
                </Carousel.Item>
        ))}
          </Carousel>
        </div>
      )}
 </>
  );
};

export default Corousel;
