import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import TotalPrice from './totalPrice'

const defaultPriceList = () => (
  <div>
    <TotalPrice income={1000} outcome={1000} />
  </div>
  
)
storiesOf('TotalPrice', module)
  .add('价格总和组件', defaultPriceList)