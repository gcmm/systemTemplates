import React, { useEffect, useState } from 'react';
import { styled } from 'troyfe'
import { Layout } from 'antd';
import BaseMenu from '../BaseMenu'

const { Sider } = Layout

const LogoContent = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60%;
  }
`

const SideMenu = (props) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      width={256}
      theme={props.theme}
    >
      <LogoContent>
        <img src="/logo.png" alt="logo" />
      </LogoContent>
      <BaseMenu mode="inline" theme={props.theme} />
    </Sider>
  );
};

export default SideMenu;