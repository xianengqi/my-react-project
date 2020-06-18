import React, { FC, useState } from "react";
import { List, Button } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import { ILedgerInfo } from "../../interface/ledger";

const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_1891915_ndgr420z3gq.js"],
});

interface IPriceListProps {
  items?: ILedgerInfo[];
  onModifyItem?: (item: ILedgerInfo) => void;
  onDeleteItem?: (item: ILedgerInfo) => void;
}

export const PriceList: FC<IPriceListProps> = (props) => {
  const { items, onModifyItem, onDeleteItem, children } = props;
  const handleEdit = (item: ILedgerInfo) => {
    if (onModifyItem) {
      onModifyItem(item);
    }
  };
  const handleDelete = (item: ILedgerInfo) => {
    if (onDeleteItem) {
      onDeleteItem(item);
    }
  };
  return (
    <List
      bordered
      dataSource={items}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button onClick={() => handleEdit(item)} type="primary" shape="circle" icon={<IconFont type="icon-bianji" />} />,
            <Button onClick={() => handleDelete(item)} type="primary" danger shape="circle" icon={<IconFont type="icon-shanchu" />} />,
          ]}
        >
          <IconFont
            type={item.category?.iconName || ""}
            style={{
              fontSize: "20px",
              backgroundColor: "#007bff",
              borderRadius: "2px",
              padding: "5px",
              color: "#fff",
            }}
          />
          <span>{item.title}</span>
          <span>
            {item.category?.type === "income" ? "+" : "-"}
            {item.price}元
          </span>
          <span>{item.date}</span>
        </List.Item>
      )}
    />
  );
};

export default PriceList;
