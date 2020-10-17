import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

function ProductCarousel({image}) {
    return (
        <Carousel>
            <div>
                <img src={image} alt='' />
            </div>
            <div>
                <img src={image} alt='' />
            </div>
            <div>
                <img src={image} alt='' />
            </div>
            <div>
                <img src={image} alt='' />
            </div>
            <div>
                <img src={image} alt='' />
            </div>
        </Carousel>
    )
}

export default ProductCarousel
