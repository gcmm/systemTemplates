import React from 'react';
import { Menu } from 'antd';
import { Link } from 'troyfe';
import { SmileOutlined } from '@ant-design/icons';

const BaseMenu = (props) => {
  return (
    <Menu mode={props.mode} theme={props.theme} defaultSelectedKeys={['0']}>
      <Menu.Item key="0">
        <SmileOutlined />
        <span>
          <Link to="/">首页</Link>
        </span>
      </Menu.Item>
    </Menu>
  );
};

export default BaseMenu;