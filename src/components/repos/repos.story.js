import React from 'react'
import { storiesOf } from '@storybook/react'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title prop', () => (
    <Repos title='Favoritos' />
  ))

  .add('with repos', () => (
    <Repos
      title='Favoritos'
      repos={[{
        link: 'http:marquinhusgoncalves.com',
        name: 'Marquinhus Blog'
      }]}
      />
  ))
