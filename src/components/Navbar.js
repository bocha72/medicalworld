import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import facebook from '../img/toolbar/facebook-white2.svg'
import instagram from '../img/toolbar/instagram-white.svg'
import twitter from '../img/toolbar/twitter-white.svg'
import phone from '../img/toolbar/phone.svg'
import mail from '../img/toolbar/mail.svg'
import location from '../img/toolbar/location.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="header-toolbar">
          <div className="toolbar-left">
            <div className="contact-info">
              <span className="phone item">
                <a title="phone" href="tel:+541145049988">
                  <img
                    className="contact-img"
                    src={phone}
                    alt="phone"
                    style={{ width: '1em', height: '1em' }}
                  />
                  <span className="label">
                    +54.11.4504.9988
                  </span>
                </a>
              </span>
              <span className="separator">|</span>
              <span className="mail item">
                <a title="mail" href="mailto:info@medicalworld.com">
                  <img
                    className="contact-img"
                    src={mail}
                    alt="mail"
                    style={{ width: '1em', height: '1em' }}
                  />
                  <span className="label">
                    info@medicalworld.com
                  </span>
                </a>
              </span>
              <span className="separator">|</span>
              <span className="location item">
                <a title="location" href="http://www.algunsitio.com">
                  <img
                    className="contact-img"
                    src={location}
                    alt="location"
                    style={{ width: '1em', height: '1em' }}
                  />
                  <span className="label">
                    Buenos Aires, Argentina
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div className="toolbar-right">
            <ul className="social">
              <li className="facebook">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </li>
              <span className="separator">|</span>
              <li className="instagram">
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </li>
              <span className="separator">|</span>
              <li className="twitter">
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="MedicalWorld" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link to="/" className="navbar-item">
                Inicio
              </Link>
              <Link className="navbar-item" to="/about">
                La Empresa
              </Link>
              <Link className="navbar-item" to="/product-post">
                Productos 2
              </Link>
              <Link className="navbar-item" to="/products">
                Productos
              </Link>
              <Link className="navbar-item" to="/blog">
                Eventos
              </Link>
              <Link className="navbar-item" to="/contact">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
