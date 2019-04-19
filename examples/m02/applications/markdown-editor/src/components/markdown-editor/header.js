'use strict'

import React, { PropTypes } from 'react'

import '../../css/style.css'

const Header = ({ isSaving, handleCreate, handleRemove }) => {
  return (
    <header className='editor-header'>
      <p className='save-message'>
        {isSaving ? 'Salvando...' : 'Salvo'}
      </p>
      <button onClick={handleCreate}>Criar novo</button>
      <button onClick={handleRemove}>Remover</button>
    </header>
  )
}

Header.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Header
