import React, { Component } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import iurco from '../../static/img/iurco.png'

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
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>
                <div>Item 7</div>
                <div>Item 8</div>
                <div>Item 9</div>
                <div>Item 10</div>
                <div>Item 11</div>
                <div>Item 12</div>
                <div>Item 13</div>
                <div>Item 14</div>
            </Carousel>
        )
    }
}
export default BrandSlider;