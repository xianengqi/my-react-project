import React from 'react';
import { storiesOf } from '@storybook/react'

storiesOf('欢迎', module)
  .add('welcome', () => {
    return (
      <>
        <h1>项目使用文档： 编写高质量的业务组件</h1>
        <p><a href="https://www.yuque.com/docs/share/7ac112e3-c344-4554-aa02-d50e90f3ebd9?#">安装指南:</a></p>
        <p><a href="https://xianengqi.github.io/my-react-project">线上文档地址</a></p>
        <p>使用说明：使用Typecript + ant design 开发的在线账本，采用前后端分离开发方式,集成CI/CD自动化测试一条龙</p>
        <p>提高代码质量</p>
        <p className="title">请留意报错信息，否则无法提交代码到仓库</p>
      </>
    )
  },{ info: { disable: true } })