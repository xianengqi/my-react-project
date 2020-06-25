
import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import {IconFont} from './iconFont'


const defaultIconFontSize = () => (
  <div>
  <IconFont className="if-spin iconloading loadingstyle" type="icon-lvyoutehui" />
  </div>
)



storiesOf('IconFont', module)
  .add('旋转的IconFont', defaultIconFontSize)