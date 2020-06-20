import React, { FC } from "react";
import { Tabs} from "antd";
import { IconFont } from "../IconFont/iconFont";

const { TabPane } = Tabs;

export interface IViewTabProps {
  activeTab?: string;
  onTabChange?: () => void;
}

export const ViewTab: FC<IViewTabProps> = (props) => {
  // const { activeTab, onTabChange } = props;
  const Style = {
    padding: "2px",
    fontSize: "20px",
    paddingTop: "5px",
  };
  return (
    <div className="view-tab">
      <Tabs defaultActiveKey="2">
        <TabPane
          tab={
            <span>
              <IconFont style={Style} type="icon-lvyoutehui" />
              列表模式
            </span>
          }
          key="1"
        >
          Tab 1
        </TabPane>

        <TabPane
          tab={
            <span>
              <IconFont style={Style} type="icon-lvyoutehui" />
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
