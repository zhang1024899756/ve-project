import React from 'react';
import { Layout } from 'antd';
import SiderMenu from './pla-menu';
const { Sider } = Layout;


export default class RightSider extends React.Component {
  render() {
    const _style = {
      lyout: {background: '#fff'}
    };
    return (
        <Sider style={_style.lyout}>
          <SiderMenu {...this.props}></SiderMenu>
        </Sider>
    );
  }
}
