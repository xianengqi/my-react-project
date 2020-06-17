import React, { FC, useState } from "react";
import { List, Button } from "antd";

type TypeItem = "outcome" | "addcome";

interface ICategoryProps {
  id?: number;
  name?: string;
  type?: TypeItem | string;
}

interface IItemsProps {
  id?: number;
  title?: string;
  price?: number;
  date?: string;
  category?: ICategoryProps;
}

interface IPriceListProps {
  items?: IItemsProps[];
  onModifyItem?: (item: IItemsProps) => void;
  onDeleteItem?: (item: IItemsProps) => void;
  children?: React.ReactNode;
}

export const PriceList: FC<IPriceListProps> = (props) => {
  const { items, onModifyItem, onDeleteItem, children } = props;
  const handleEdit = (item: IItemsProps) => {
    if (onModifyItem) {
      onModifyItem(item)
    }
  }
  const handleDelete = (item: IItemsProps) => {
    if (onDeleteItem) {
      onDeleteItem(item)
    }
  }
  return (
    <List
      bordered
      dataSource={items}
      renderItem={(item) => (
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
          <span>{item.category?.name}</span>
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
