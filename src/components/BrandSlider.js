import React, { Component } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import brand01 from '../../static/img/brands-logos/brand01.png'
import brand02 from '../../static/img/brands-logos/brand02.png'
import brand03 from '../../static/img/brands-logos/brand03.png'
import brand04 from '../../static/img/brands-logos/brand04.png'
import brand05 from '../../static/img/brands-logos/brand05.png'
import brand06 from '../../static/img/brands-logos/brand06.png'
import brand07 from '../../static/img/brands-logos/brand07.png'
import brand08 from '../../static/img/brands-logos/brand08.png'
import brand09 from '../../static/img/brands-logos/brand09.png'
import brand10 from '../../static/img/brands-logos/brand10.png'
import brand11 from '../../static/img/brands-logos/brand11.png'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {index + 1}
      </li>
    );
  };

class BrandSlider extends Component {

    render() {
        return (
            <Carousel 
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customDot={<CustomDot />}
            >
                <div><img src={brand01} alt="" className="brand-logo"/></div>
                <div><img src={brand02} alt="" className="brand-logo"/></div>
                <div><img src={brand03} alt="" className="brand-logo"/></div>
                <div><img src={brand04} alt="" className="brand-logo"/></div>
                <div><img src={brand05} alt="" className="brand-logo"/></div>
                <div><img src={brand06} alt="" className="brand-logo"/></div>
                <div><img src={brand07} alt="" className="brand-logo"/></div>
                <div><img src={brand08} alt="" className="brand-logo"/></div>
                <div><img src={brand09} alt="" className="brand-logo"/></div>
                <div><img src={brand10} alt="" className="brand-logo"/></div>
                <div><img src={brand11} alt="" className="brand-logo"/></div>
            </Carousel>
        )
    }
}
export default BrandSlider;