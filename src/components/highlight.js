import React from 'react'

import PropTypes from 'prop-types'

import './highlight.css'

const Highlight = (props) => {
  return (
    <div className="highlight-highlight">
      <span className="highlight-text">{props.Description}</span>
    </div>
  )
}

Highlight.defaultProps = {
  Description:
    'Most students and young adults seek for internship opportunities during their vacations with limited success. An internship is a form of structured and supervised experiential learning in a student’s chosen field but most important to acquire work related employable soft and technical skills to be able to perform efficiently and effectively after graduation. Internships encompass learning objectives, observation, reflection, evaluation and assessment. Internships offer students career exploration and skills application while providing employers with creativity, enthusiasm and assistance for project work. It is a winning scenario for students, employers, colleges/universities.',
}

Highlight.propTypes = {
  Description: PropTypes.string,
}

export default Highlight
