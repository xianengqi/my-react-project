import React, { FC } from "react";
import { Tabs} from "antd";
import { IconFont } from "../IconFont/iconFont";

const { TabPane } = Tabs;

export interface IViewTabProps {
  activeTab?: string;
  onTabChange?: (T: any) => void;
}
export const ViewTab: FC<IViewTabProps> = (props) => {
  const { onTabChange } = props;
  const Style = {
    paddingRight: "2px",
    fontSize: "23px",
    paddingTop: "5px",
  };
  return (
    <div className="view-tab">
      <Tabs type='card' defaultValue={1} onChange={onTabChange} >
        <TabPane
          tab={
            <span>
              <IconFont style={Style} type="icon-liebiao" />
              列表模式
            </span>
          }
          key='1'
        >
        </TabPane>
        <TabPane
          tab={
            <span>
              <IconFont style={Style} type="icon-gupiao" />
              图表模式
            </span>
          }
          key='2'
        >
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ViewTab;
