import React, { FC } from "react";
import { Tabs} from "antd";
import { IconFont } from "../IconFont/iconFont";
import PriceList from '../PriceList/priceList'
const { TabPane } = Tabs;

export interface IViewTabProps {
  activeTab?: string;
  onTabChange?: () => void;
}
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
export const ViewTab: FC<IViewTabProps> = (props) => {
  // const { activeTab, onTabChange } = props;
  const Style = {
    paddingRight: "2px",
    fontSize: "23px",
    paddingTop: "5px",
  };
  return (
    <div className="view-tab">
      <Tabs type='card' defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <IconFont style={Style} type="icon-liebiao" />
              列表模式
            </span>
          }
          key="1"
        >
          <div><PriceList items={items1} onModifyItem={(item) => {alert(item.id)}}  onDeleteItem={(item) => {alert(item.id)}} /></div>
        </TabPane>

        <TabPane
          tab={
            <span>
              <IconFont style={Style} type="icon-gupiao" />
              图表模式
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ViewTab;
