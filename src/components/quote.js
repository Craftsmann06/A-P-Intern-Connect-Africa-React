import React from 'react'

import PropTypes from 'prop-types'

import './quote.css'

const Quote = (props) => {
  return (
    <div className={`quote-quote ${props.rootClassName} `}>
      <div className="quote-quote1">
        <span className="quote-quote2">{props.Quote}</span>
      </div>
      <div className="quote-people">
        <div className="quote-person">
          <img
            alt="person-avatar"
            src={props.Avatar}
            className="quote-avatar"
          />
          <div className="quote-person-details">
            <span id="quote-author" className="quote-text">
              {props.Author}
            </span>
            <span id="quote-title" className="">
              {props.Title}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Quote.defaultProps = {
  Quote:
    '“I love lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaation ullamco 100%."',
  rootClassName: '',
  Title: 'Manager @Vista Social',
  Author: 'Andy Smith',
  Avatar:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/be94076d-9916-409d-bbc9-bfae1bfdf57c?org_if_sml=116621',
}

Quote.propTypes = {
  Quote: PropTypes.string,
  rootClassName: PropTypes.string,
  Title: PropTypes.string,
  Author: PropTypes.string,
  Avatar: PropTypes.string,
}

export default Quote
