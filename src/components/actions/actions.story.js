import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Actions from './index'

storiesOf('Actions', module)
  .add('first story', () => (
    <Actions
      getRepos={action('Get Repos')}
      getStarred={action('Get Starred')}
    >
    </Actions>
  ))
