'use strict'

import React, { PropTypes } from 'react'
import Button from 'components/button'

import '../../css/style.css'

const Header = ({ isSaving, handleCreate, handleRemove }) => {
  return (
    <header className='editor-header'>
      {isSaving !== null && (
        <p className='save-message'>
          {isSaving ? 'Salvando...' : 'Salvo'}
        </p>)}
      <Button onClick={handleCreate} kind='success'>
        Criar novo
      </Button>
      <Button onClick={handleRemove} kind='danger'>
        Remover
      </Button>
    </header>
  )
}

Header.propTypes = {
  isSaving: PropTypes.bool,
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Header
