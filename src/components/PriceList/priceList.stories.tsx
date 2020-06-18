import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PriceList from './priceList'

const items1 = [
  {
    "id": 1,
    "title": "去新疆游玩",
    "price": 200,
    "date": "2020-06-18",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "icon-lvyoutehui"
    }
  },
  {
    "id": 2,
    "title": "去拉萨游玩",
    "price": 200,
    "date": "2020-06-18",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "icon-lvyoutehui"
    }
  }
]

const defaultPriceList = () => (
  <PriceList items={items1} onModifyItem={(item) => {alert(item.id)}} onDeleteItem={(item) => {alert(item.id)}} />
)
storiesOf('PriceList', module)
  .add('PriceList', defaultPriceList)