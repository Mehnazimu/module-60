import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/Brand1.png';
import Brand2 from '../../../assets/brands/Brand2.png';


const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    );
};

export default BrandCarousel;