import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className={`banner-banner ${props.rootClassName} `}>
      <div className="banner-container"></div>
    </div>
  )
}

Banner.defaultProps = {
  rootClassName: '',
}

Banner.propTypes = {
  rootClassName: PropTypes.string,
}

export default Banner
