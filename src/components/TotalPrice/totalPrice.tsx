import React, { FC } from "react";
import { Row, Col } from "antd";

export interface ITotalProps {
  /** 收入 */
  income: number;
  /** 支出 */
  outcome: number;
}

export const TotalPrice: FC<ITotalProps> = (props) => {
  const { income, outcome } = props;
  return (
    <div className="total-price">
      <Row justify="space-around">
        <Col span={8}>
          <div className="income">收入 : {income} 元</div>
        </Col>
        <Col span={8}>
          <div className="outcome">支出 : {outcome} 元</div>
        </Col>
      </Row>
    </div>
  );
};

export default TotalPrice;
