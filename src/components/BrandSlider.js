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
                autoPlay={true}
                autoPlaySpeed={2000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                infinite={true}
                customTransition="transform 400ms ease-in-out 0s"
            >
                <div>Brand Image 1</div>
                <div>Brand Image 2</div>
                <div>Brand Image 3</div>
                <div>Brand Image 4</div>
                <div>Brand Image 5</div>
                <div>Brand Image 6</div>
                <div>Brand Image 7</div>
                <div>Brand Image 8</div>
                <div>Brand Image 9</div>
                <div>Brand Image 10</div>
                <div>Brand Image 11</div>
                <div>Brand Image 12</div>
                <div>Brand Image 13</div>
                <div>Brand Image 14</div>
            </Carousel>
        )
    }
}
export default BrandSlider;