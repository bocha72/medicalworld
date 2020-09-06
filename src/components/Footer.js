import React from 'react'
import { Link } from 'gatsby'
import iurco from '../../static/img/iurco.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered footer-content">
          <Link to="/" className="footer-link medical-world">MEDICAL WORLD</Link>|
          <Link to="/" className="footer-link">Términos y condiciones</Link>|
          <Link to="/" className="footer-link">Politicas de Privacidad</Link>|
          <span className="footer-item">Copyright 2020. Todos los derechos reservados.</span>
          <Link to="https://www.iurco.com"className="iurco">
            <img src={iurco} alt="" className="iurco-logo"/>
          </Link>
        </div>
      </footer>
    )
  }
}

export default Footer
