'use strict'

import React, { PropTypes } from 'react'

import '../css/style.css'

const Header = ({ onSave }) => {
  return (
    <header className='editor-header'>
      <button onClick={onSave} className='save-message'>Salvar</button>
    </header>
  )
}

Header.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default Header
