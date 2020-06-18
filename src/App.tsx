import React, {FC} from 'react'
import './App.css'
import PriceList from './components/PriceList/priceList'

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
      "iconName": "icon-lvxing"
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
      "type": "income",
      "iconName": "icon-lvyoutehui"
    }
  }
]

const App: FC = () => {
  return (
    
    <div className="App">
      
      {/* <Button type="primary">Button</Button> */}
      <PriceList items={items1} onModifyItem={(item) => {alert(item.id)}}  onDeleteItem={(item) => {alert(item.id)}} />
    </div>
  )
}

export default App;