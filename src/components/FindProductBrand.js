import React, { Component } from 'react'
import { Link } from 'gatsby'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import brand01 from '../../static/img/brands-logos/brand01x2.png'
import brand02 from '../../static/img/brands-logos/brand02x2.png'
import brand03 from '../../static/img/brands-logos/brand03x2.png'
import brand04 from '../../static/img/brands-logos/brand04x2.png'
import brand05 from '../../static/img/brands-logos/brand05x2.png'
import brand06 from '../../static/img/brands-logos/brand06x2.png'
import brand07 from '../../static/img/brands-logos/brand07x2.png'
import brand08 from '../../static/img/brands-logos/brand08x2.png'
import brand09 from '../../static/img/brands-logos/brand09x2.png'
import brand10 from '../../static/img/brands-logos/brand10x2.png'
import brand11 from '../../static/img/brands-logos/brand11x2.png'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
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

class FindProductBrand extends Component {

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
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand01} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>ihtDestiny BD</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand02} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>IHT Cordynamic</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand03} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>Venus MEDTECH</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand04} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>VenusA - Valve</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand05} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>CeraFlex</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand06} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>LifeTech</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand07} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>TAV</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand08} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>Stentys</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand09} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>BlueFlow</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand10} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>Xposition S</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
                <div style= {{
                    display: 'flex',
                }}>
                    <div className="column is-6 brand-logo-container">
                        <img src={brand11} alt="" className="brand-logo"/>
                    </div>
                    <div className="column is-6 brand-info-container">
                        <h3>Medinol</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                        <Link className="btn" to="/products">
                          Ver producto
                        </Link>
                    </div>
                </div>
            </Carousel>
        )
    }
}
export default FindProductBrand;