'use strict'

import React, {PropTypes} from 'react'

import './css/style.css'

const MarkdownEditor = ({value, handleChange}) => {
  return (
    <div className='editor'>
      <textarea value={value} onChange={handleChange} />

      <div className='view'>
        {value}
      </div>
    </div>
  )
}

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
