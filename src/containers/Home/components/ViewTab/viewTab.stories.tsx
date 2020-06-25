import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import ViewTab from './viewTab'

const defaultPriceList = () => (
  <ViewTab  />
)
storiesOf('ViewTab', module)
  .add('Tab组件切换', defaultPriceList)