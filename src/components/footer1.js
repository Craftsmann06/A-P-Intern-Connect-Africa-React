import React from 'react'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <div id="footter" className="footer1-footer">
      <div className="footer1-content">
        <div className="footer1-information">
          <div className="footer1-heading">
            <img
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="footer1-pasted-image"
            />
          </div>
          <div className="footer1-socials"></div>
        </div>
        <div className="footer1-links">
          <div className="footer1-column">
            <span className="footer1-header">{props.Header}</span>
            <a
              href={props.link_Link}
              target="_blank"
              rel="noreferrer noopener"
              className="footer1-link"
            >
              {props.Link}
            </a>
            <a href="tel:+233201694771" className="footer1-link1">
              {props.Link1}
            </a>
            <a
              href="mailto:internconnectafrica@gmail.com?subject=Contact Us On ICA Site"
              className="footer1-link2"
            >
              {props.Link2}
            </a>
          </div>
          <div className="footer1-column1">
            <span className="footer1-header1">{props.Header1}</span>
            <a
              href="https://classroom.umcghana.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer1-link3"
            >
              {props.Link3}
            </a>
            <span className="footer1-link4">{props.Link4}</span>
            <a
              href="https://classroom.umcghana.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer1-link5"
            >
              {props.Link5}
            </a>
            <a
              href="https://classroom.umcghana.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer1-link6"
            >
              {props.Link6}
            </a>
            <a
              href="https://classroom.umcghana.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer1-link7"
            >
              {props.Link7}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer1.defaultProps = {
  Link7: 'Business Development',
  Link1: '(+233) 20-169-4771',
  Link5: 'Personal Development',
  Link2: 'internconnectafrica@gmail.com',
  Link: 'E54 Avodire St. Ashongman Estate Digital Address : GE 154 7887',
  pastedImage_src: '/playground_assets/logo-200h.jpg',
  Header: 'GET IN TOUCH',
  Header1: 'OUR PROGRAMMES',
  Link4: 'Critical Technical Skills',
  Link6: 'Professional Development',
  pastedImage_alt: 'pastedImage',
  link_Link:
    'https://www.google.com/maps/place/Ashongman+Estates/@5.7058392,-0.2450896,15z/data=!4m9!1m2!2m1!1sE54+Avodire+St.+Ashongman+Estate+Digital+Address+:+GE+154+7887!3m5!1s0xfdf9e6c537514a5:0xc30317c1c3bd453!8m2!3d5.706245!4d-0.2361926!15sCj5FNTQgQXZvZGlyZSBTdC4gQXNob25nbWFuIEVzdGF0ZSBEaWdpdGFsIEFkZHJlc3MgOiBHRSAxNTQgNzg4NyIDiAEBkgEMbmVpZ2hib3Job29k4AEA',
  Link3: 'Soft Skills',
}

Footer1.propTypes = {
  Link7: PropTypes.string,
  Link1: PropTypes.string,
  Link5: PropTypes.string,
  Link2: PropTypes.string,
  Link: PropTypes.string,
  pastedImage_src: PropTypes.string,
  Header: PropTypes.string,
  Header1: PropTypes.string,
  Link4: PropTypes.string,
  Link6: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  link_Link: PropTypes.string,
  Link3: PropTypes.string,
}

export default Footer1
