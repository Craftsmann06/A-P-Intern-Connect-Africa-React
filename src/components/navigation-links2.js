import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links2-navlink">
        {props.text}
      </Link>
      <span className="navigation-links2-text">{props.text1}</span>
      <span className="navigation-links2-text1">{props.text2}</span>
      <Link to="/our-strategy" className="navigation-links2-navlink1">
        {props.text3}
      </Link>
      <a
        href="https://classroom.umcghana.org/student-registration/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links2-link"
      >
        {props.text4}
      </a>
      <Link to="/news" className="navigation-links2-navlink2">
        {props.text41}
      </Link>
      <Link to="/contact-us" className="navigation-links2-navlink3">
        {props.text411}
      </Link>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text4: 'Our Programmes',
  text2: 'Our Work',
  text1: 'About Us',
  text411: 'Contact Us',
  text3: 'Our Strategy',
  text41: 'News & Events',
  text: 'Home',
  rootClassName: '',
}

NavigationLinks2.propTypes = {
  text4: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text411: PropTypes.string,
  text3: PropTypes.string,
  text41: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks2
