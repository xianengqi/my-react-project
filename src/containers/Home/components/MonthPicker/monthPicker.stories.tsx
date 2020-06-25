import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import MonthPicker from './monthPicker'

const defaultPriceList = () => (
  <div>
    <MonthPicker />
  </div>
  
)
storiesOf('MonthPicker', module)
  .add('日期选择组件', defaultPriceList)