import React, {FC} from 'react'
import './App.css';
import "../src/styles/index.scss";
import Home from './containers/Home/home'

const App: FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App;