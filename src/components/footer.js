import React from 'react'

import PropTypes from 'prop-types'

import Content from './content'
import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <Content></Content>
      <span className="footer-text">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  text: '© 2022 TGNE Solutions - Tema. All Rights Reserved.',
}

Footer.propTypes = {
  text: PropTypes.string,
}

export default Footer
