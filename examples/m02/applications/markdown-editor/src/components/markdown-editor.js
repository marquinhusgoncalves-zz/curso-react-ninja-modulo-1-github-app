'use strict'

import React, {PropTypes} from 'react'
import Header from './markdown-editor-header'

import '../css/style.css'

const MarkdownEditor = ({value, isSaving, handleChange, getMarkup}) => {
  return (
    <section className='editor'>
      <Header isSaving={isSaving} />
      <textarea value={value} onChange={handleChange} autoFocus />
      <div className='view' dangerouslySetInnerHTML={getMarkup()} />
    </section>
  )
}

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  isSaving: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
