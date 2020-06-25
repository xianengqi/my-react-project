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
      <Row justify="end" className="total-price-white">
        <Col span={6}>
          <div className="income">收入 : {income}</div>
        </Col>
        <Col span={6}>
          <div className="outcome">支出 : {outcome}</div>
        </Col>
      </Row>
    </div>
  );
};

export default TotalPrice;
