'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('Save with isSaving === null', () => (
  <div style={{ background: '#ccc' }}>
    Mensagem: "<SaveMessage isSaving={null} />"
  </div>
))

stories.add('Save with isSaving === true', () => (
  <div style={{ background: '#ccc' }}>
    Mensagem: "<SaveMessage isSaving />"
  </div>
))

stories.add('Save with isSaving === false', () => (
  <div style={{ background: '#ccc' }}>
    Mensagem: "<SaveMessage isSaving={false} />"
  </div>
))
