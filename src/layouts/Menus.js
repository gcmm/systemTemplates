import React from 'react';
import { Menu } from 'antd';
import { Link, styled } from 'troyfe';
import { SmileOutlined } from '@ant-design/icons';

const MenuBox = styled.div`
  width: 100%;
  padding: 0 50px;
  background: #fff;
`;
export default function Menus() {
  return (
    <MenuBox>
      <Menu mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="0">
          <SmileOutlined />
          <span>
            <Link to="/">首页</Link>
          </span>
        </Menu.Item>
      </Menu>
    </MenuBox>
  );
}
