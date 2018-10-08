import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/tunnl_logo_red.png'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/tunnl_logo_red.png')} width="60" /></Link>
      <Link to="/tunnl">Tunnl</Link>
      <Link to="/faq">Faq's</Link>
      <Link to="/download"><button>+ Download</button></Link>
    </div>
  </div>
)

export default Header
