import React, { Component } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

class BrandSlider extends Component {

    render() {
        return (
            <Carousel 
                responsive={responsive}
                autoPlay={false}
                autoPlaySpeed={2000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                infinite={true}
                customTransition="transform 400ms ease-in-out 0s"
            >
                <div>Brand logo 1</div>
                <div>Brand logo 2</div>
                <div>Brand logo 3</div>
                <div>Brand logo 4</div>
                <div>Brand logo 5</div>
            </Carousel>
        )
    }
}
export default BrandSlider;