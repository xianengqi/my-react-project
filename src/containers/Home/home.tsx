import React, { FC } from "react";
import { Row, Col } from "antd";
import MonthPicker from "../../components/MonthPicker/monthPicker";
// import IconFont from "../../components/IconFont/iconFont";
// import PriceList from "../../components/PriceList/priceList";
import TotalPrice from "../../components/TotalPrice/totalPrice";
// import ViewTab from "../../components/ViewTab/viewTab";

// const items1 = [
//   {
//     id: 1,
//     title: "去新疆游玩",
//     price: 200,
//     date: "2020-06-18",
//     category: {
//       id: 1,
//       name: "旅行",
//       type: "outcome",
//       iconName: "icon-lvxing",
//     },
//   },
//   {
//     id: 2,
//     title: "去拉萨游玩",
//     price: 200,
//     date: "2020-06-18",
//     category: {
//       id: 1,
//       name: "旅行",
//       type: "income",
//       iconName: "icon-lvyoutehui",
//     },
//   },
//   {
//     id: 3,
//     title: "理财收入",
//     price: 200,
//     date: "2020-06-18",
//     category: {
//       id: 2,
//       name: "理财",
//       type: "income",
//       iconName: "icon-licai",
//     },
//   },
// ];

export const Home: FC = (props) => {
  return (
    // `<React.Fragment>` => 生成一个空节点
    <React.Fragment>
      <div className="App-header">
        <Row justify="space-around" align="bottom" className="App-header-month">
          <Col span={8}>
            <MonthPicker />
          </Col>
          <Col span={8}>
            <TotalPrice income={1000} outcome={1000} />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Home;
