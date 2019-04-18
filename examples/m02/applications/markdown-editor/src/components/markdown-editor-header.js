'use strict'

import React, { PropTypes } from 'react'

import '../css/style.css'

const Header = ({ isSaving }) => {
  return (
    <header className='editor-header'>
      <p className='save-message'>
        {isSaving ? 'Salvando...' : 'Salvo'}
      </p>
    </header>
  )
}

Header.propTypes = {
  isSaving: PropTypes.bool.isRequired
}

export default Header
