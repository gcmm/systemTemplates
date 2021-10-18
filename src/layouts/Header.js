import React from 'react';
import { Layout } from 'antd';
import { styled } from 'troyfe';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import BaseMenu from '../components/BaseMenu'

const Header = styled(Layout.Header)`
  background: #fff;
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .trigger {
      font-size: 28px;
    }
    .rightWarpper {
      height: 100%;
      line-height: 60px;
      span {
        &:first-child {
          &:hover {
            cursor: pointer;
            color: #1890ff;
          }
        }
      }
    }
  }
`;

export default function HeaderComponent({ collapsed, toggle, backSystem, menuLayout, navTheme }) {
  return (
    <Header>
      <div className="header">
        {
          menuLayout === 'topmenu' ? (
            <>
              <div className="logo">
                <img src="/logo.png" alt="troy" />
              </div>
              <BaseMenu mode="horizontal" theme={navTheme}/>
            </>
          ) : (
            <>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </>
          )
        }
        <div className="rightWarpper">
          <span onClick={backSystem}>退出</span>
          <span style={{ marginLeft: '15px' }}>{'管理员'}</span>
        </div>
      </div>
    </Header>
  );
}
