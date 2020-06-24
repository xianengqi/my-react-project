import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Home from './home'

const defaultPriceList = () => (
  <div>
    <Home />
  </div>
  
)
storiesOf('Home', module)
  .add('主页', defaultPriceList)