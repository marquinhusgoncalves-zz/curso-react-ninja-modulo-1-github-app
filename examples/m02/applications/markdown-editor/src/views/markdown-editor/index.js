'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Files from './files'

import '../../css/style.css'

const MarkdownEditor = ({value, handleChange, getMarkup, textareaRef, ...props}) => {
  return (
    <section className='editor'>
      <Header {...props} />
      <Files />
      <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />
      <div className='view' dangerouslySetInnerHTML={getMarkup()} />
    </section>
  )
}

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
