import React, {FC} from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const dateFormat = 'YYYY年MM月DD日';

export const MonthPicker: FC = (props) => {
  const onChange = (data: any, dataString: string) => {
    console.log('这 => ', data);
    console.log('是 => ', dataString);
  }
  
  return (
    <>
      <div style={{color: '#ffff', paddingBottom: '5px'}}>选择月份</div>
      <DatePicker style={{width:'160px'}} locale={locale}  onChange={onChange} format={dateFormat} />
    </>
  )
}

export default MonthPicker;