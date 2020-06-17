import React, {FC} from 'react'
import { Button } from 'antd'
import './App.css'

const items = [
  {
    "id": 1,
    "title": "去新疆游玩",
    "price": 200,
    "date": "2020-06-18",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome"
    }
  }
]

const App: FC = () => {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  )
}

export default App;