import React from 'react'

import PropTypes from 'prop-types'

import Social from './social'
import './content.css'

const Content = (props) => {
  return (
    <div className="content-content">
      <div className="content-information">
        <div className="content-heading">
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="content-pasted-image"
          />
        </div>
        <div className="content-socials">
          <Social rootClassName="social-root-class-name"></Social>
          <Social
            Insider_src="/playground_assets/pastedimage-k0l6.svg"
            rootClassName="social-root-class-name1"
          ></Social>
          <Social
            Insider_src="/playground_assets/pastedimage-ld65.svg"
            rootClassName="social-root-class-name2"
          ></Social>
        </div>
      </div>
      <div className="content-links">
        <div className="content-column">
          <span className="content-header">{props.Header}</span>
          <a
            href="https://www.google.com/maps/place/Ashongman+Estates/@5.7058392,-0.2450896,15z/data=!4m9!1m2!2m1!1sE54+Avodire+St.+Ashongman+Estate+Digital+Address+:+GE+154+7887!3m5!1s0xfdf9e6c537514a5:0xc30317c1c3bd453!8m2!3d5.706245!4d-0.2361926!15sCj5FNTQgQXZvZGlyZSBTdC4gQXNob25nbWFuIEVzdGF0ZSBEaWdpdGFsIEFkZHJlc3MgOiBHRSAxNTQgNzg4NyIDiAEBkgEMbmVpZ2hib3Job29k4AEA"
            target="_blank"
            rel="noreferrer noopener"
            className="content-link"
          >
            {props.Link}
          </a>
          <a href="tel:+233201694771" className="content-link1">
            {props.Link1}
          </a>
          <a
            href="mailto:internconnectafrica@gmail.com?subject=Contact Us On ICA Site"
            className="content-link2"
          >
            {props.Link2}
          </a>
        </div>
        <div className="content-column1">
          <span className="content-header1">{props.Header1}</span>
          <span className="content-link3">{props.Link5}</span>
          <span className="content-link4">{props.Link6}</span>
          <span className="content-link5">{props.Link7}</span>
          <span className="content-link6">{props.Link8}</span>
          <span className="content-link7">{props.Link9}</span>
        </div>
      </div>
    </div>
  )
}

Content.defaultProps = {
  Link9: 'Business Development',
  Link1: '(+233) 20-169-4771',
  Link: 'E54 Avodire St. Ashongman Estate Digital Address : GE 154 7887',
  Link8: 'Professional Development',
  Header1: 'OUR PROGRAMMES',
  pastedImage_src: '/playground_assets/logo-200h.jpg',
  pastedImage_alt: 'pastedImage',
  Link7: 'Personal Development',
  Link2: 'internconnectafrica@gmail.com',
  Link5: 'Soft Skills',
  Header: 'GET IN TOUCH',
  Link6: 'Critical Technical Skills',
}

Content.propTypes = {
  Link9: PropTypes.string,
  Link1: PropTypes.string,
  Link: PropTypes.string,
  Link8: PropTypes.string,
  Header1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  Link7: PropTypes.string,
  Link2: PropTypes.string,
  Link5: PropTypes.string,
  Header: PropTypes.string,
  Link6: PropTypes.string,
}

export default Content
