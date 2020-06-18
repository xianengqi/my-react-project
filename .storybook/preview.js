import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import "../src/styles/index.scss"
// add-info table style not working for now, I don't know the reason, so we have to manaul import it
import "./fix_info_style.scss"
import 'antd/dist/antd.css';

// library.add(fas)
const wrapperStyle = {
  padding: '20px 40px',
  width: '100%px'
}

const storyWrapper = (stroyFn) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({info: { inline: true, header: false}})
// const loaderFn = () => {
//   const allExports = [require('../src/welcome.stories.tsx')];
//   const req = require.context('../src/components', true, /\.stories\.tsx$/);
//   req.keys().forEach(fname => allExports.push(req(fname)));
//   return allExports;
// };

const loaderFn = () => {
  return [
    require('../src/welcome.stories.tsx'),
    require('../src/components/PriceList/priceList.stories.tsx'),
  ]
}


// automatically import all files ending in *.stories.js
configure(loaderFn, module);
