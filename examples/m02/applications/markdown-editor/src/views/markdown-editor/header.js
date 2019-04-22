'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

import '../../css/style.css'

const Header = ({ title, isSaving, handleCreate, handleRemove }) => {
  return (
    <header className='editor-header'>
      <input type='text' value={title} />
      <SaveMessage isSaving={isSaving} />

      <Button onClick={handleCreate} kind='success'>
        Criar novo
      </Button>
      <Button onClick={handleRemove} kind='danger'>
        Remover
      </Button>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Header
