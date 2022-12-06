import React from 'react'

import PropTypes from 'prop-types'

import './overlay.css'

const Overlay = (props) => {
  return (
    <div className={`overlay-overlay ${props.rootClassName} `}>
      <div className="overlay-header"></div>
    </div>
  )
}

Overlay.defaultProps = {
  rootClassName: '',
}

Overlay.propTypes = {
  rootClassName: PropTypes.string,
}

export default Overlay
