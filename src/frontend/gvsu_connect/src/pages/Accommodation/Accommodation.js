import React from "react";
import Header from "../../components/Header";
import { Carousel } from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';


function CarouselItem(props) {
    return (
      <Paper>
        <img src={props.item.imageUrl} alt={props.item.title} />
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
        <Button variant="contained" color="primary">Learn More</Button>
      </Paper>
    );
  }
   

function Accommodation() {
    const items = [
        {
          title: "Item 1",
          description: "Description for Item 1",
          imageUrl: "https://placeimg.com/640/480/animals"
        },
        {
          title: "Item 2",
          description: "Description for Item 2",
          imageUrl: "https://placeimg.com/640/480/architecture"
        },
        {
          title: "Item 3",
          description: "Description for Item 3",
          imageUrl: "https://placeimg.com/640/480/nature"
        }
      ];
    const accom = () => {
        return (
            <div>

            </div>
        )
    }
    
        
    return (
        <div>
            <Header />
            <Carousel>
                {items.map((item, index) => (
                    <CarouselItem key={index} item={item} />
                ))}
            </Carousel>
        </div>
    )
}

export default Accommodation;