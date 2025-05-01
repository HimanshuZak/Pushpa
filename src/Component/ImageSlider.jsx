import React from 'react'
// src/components/ImageSlider.jsx
import { Carousel } from 'react-bootstrap'
import './ImageSlider.css' // Add this for extra control if needed
const ImageSlider = () => {
  return (
    <div className="slider-wrapper">
    <Carousel fade interval={3000} >
      <Carousel.Item>
        <img className="d-block w-100" src={("https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-2.jpg")} alt="First slide" />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={("https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-3.jpg")} alt="Second slide" />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={("https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-1.jpg")} alt="Third slide" />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ImageSlider;