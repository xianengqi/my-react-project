import React, {FC} from 'react'
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { IconFont } from '../IconFont/iconFont'

export interface ICreatBtnProps {
  onClick?: (T: any) => void;
}

export const CreateBtn: FC<ICreatBtnProps> = (props) => {
  const { onClick } = props

  return (
    <>
    <Row justify="center">
      <Col span={12}>
        <div className="create-btn">
          <Button onClick={onClick} style={{width: '400px'}} type="primary" icon={<IconFont style={{paddingRight: "5px", paddingTop: '5px', fontSize: '20px'}} type="icon-tianjia" />}>
            创建一条新的记账记录
          </Button>
        </div>
      </Col>
    </Row>
    </>
  )
}

export default CreateBtn;