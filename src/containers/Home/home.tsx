import React, { FC } from "react";
import { Row, Col } from "antd";
import MonthPicker from "./components/MonthPicker/monthPicker";
import TotalPrice from "./components/TotalPrice/totalPrice";
import ViewTab from "./components/ViewTab/viewTab";
import CreateBtn from './components/CreateBtn/createBtn'
import PriceList from './components/PriceList/priceList'
import { TYPE_INCOME, TYPE_OUTCOME } from '../../utility/utility'

const items = [
  {
    id: 1,
    title: "去新疆游玩",
    price: 200,
    date: "2020-06-18",
    category: {
      id: 1,
      name: "旅行",
      type: "outcome",
      iconName: "icon-lvxing",
    },
  },
  {
    id: 2,
    title: "去拉萨游玩",
    price: 400,
    date: "2020-06-18",
    category: {
      id: 1,
      name: "旅行",
      type: "outcome",
      iconName: "icon-lvyoutehui",
    },
  },
  {
    id: 3,
    title: "理财收入",
    price: 200,
    date: "2020-06-18",
    category: {
      id: 2,
      name: "理财",
      type: "income",
      iconName: "icon-licai",
    },
  },
];

export const Home: FC = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let totalIncome = 0, totalOutcome = 0;
  items.forEach(item => {
    if (item.category.type === TYPE_OUTCOME) {
      totalOutcome += item.price
    } else if(item.category.type === TYPE_INCOME) {
      totalIncome += item.price
    }
  })
  return (
    // `<React.Fragment>` => 生成一个空节点
    <React.Fragment>
      <header className="App-header">
        <Row justify="space-around" align="bottom" className="App-header-month">
          <Col span={8}>
            <MonthPicker onChange={(e) => {console.log(e);} } />
          </Col>
          <Col span={8}>
            <TotalPrice income={totalIncome} outcome={totalOutcome} />
          </Col>
        </Row>
      </header>
      <div className="content-area">
        < ViewTab onTabChange={(e) => {console.log(e);}} />
        <CreateBtn onClick={(e) => {console.log(e);}} />
        <PriceList items={items} onDeleteItem={(e) => {console.log(e);}} onModifyItem={(e) => {console.log(e);}} />
      </div>
    </React.Fragment>
  );
};

export default Home;
