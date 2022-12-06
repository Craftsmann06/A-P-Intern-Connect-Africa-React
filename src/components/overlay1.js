import React from 'react'

import PropTypes from 'prop-types'

import './overlay1.css'

const Overlay1 = (props) => {
  return (
    <div className={`overlay1-overlay ${props.rootClassName} `}>
      <div className="overlay1-header">
        <div className="overlay1-heading"></div>
      </div>
      <div className="overlay1-button">
        <span className="overlay1-text">
          <span className="">Contact us</span>
          <br className=""></br>
        </span>
      </div>
    </div>
  )
}

Overlay1.defaultProps = {
  rootClassName: '',
}

Overlay1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Overlay1
