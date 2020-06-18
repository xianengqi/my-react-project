import React, { FC, useState } from "react";
import { List, Button } from "antd";
import { createFromIconfontCN } from '@ant-design/icons';
import { ILedgerInfo } from '../../interface/ledger'

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1891915_tea9pa7x0ym.js'
  ],
});


interface IPriceListProps  {
  items?: ILedgerInfo[];
  onModifyItem?: (item: ILedgerInfo) => void;
  onDeleteItem?: (item: ILedgerInfo) => void;
}

export const PriceList: FC<IPriceListProps> = (props) => {
  const { items, onModifyItem, onDeleteItem, children } = props;
  const handleEdit = (item: ILedgerInfo) => {
    if (onModifyItem) {
      onModifyItem(item)
    }
  }
  const handleDelete = (item: ILedgerInfo) => {
    if (onDeleteItem) {
      onDeleteItem(item)
    }
  }
  return (
    <List
      bordered
      dataSource={items}
      renderItem={item => (
        <List.Item
          actions={[
            <Button onClick={() => {handleEdit(item)}} type="link" size="small">
              编辑
            </Button>,
            <Button onClick={() => {handleDelete(item)}} type="link" size="small" danger>
              删除
            </Button>,
          ]}
        >
          <IconFont type={item.category?.iconName || ''} style={{fontSize: '30px', backgroundColor: '#007bff', borderRadius: '2px', padding: '5px', color: '#fff' }} />
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
