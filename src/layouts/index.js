import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from 'antd';
import { styled, useLocation, useHistory } from 'troyfe';
import Menus from './Menus';
import Header from './Header';
import BackSystemModal from './backSystemModal';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import { menuLayout, navTheme } from '../defaultSettings'
import SideMenu from '../components/SideMenu'

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
}

const Content = styled(Layout.Content)`
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: calc(100vh - 112px);
`;

const Logo = styled.div`
  height: 32px;
  background: rgba(24, 144, 255, 0.2);
  margin: 16px;
`;

const Layouts = props => {
  const [collapsed, setCollapsed] = useState(false);
  const [backVisible, setBackVisible] = useState(false);
  const locations = useLocation();
  const histroy = useHistory();

  // useEffect(() => {
  //   const userInfo = sessionStorage.getItem('user');
  //   if (!userInfo) {
  //     histroy.push('/login');
  //   }
  // }, []);

  const headerProps = {
    toggle: () => {
      setCollapsed(!collapsed);
    },
    menuLayout,
    collapsed: collapsed,
    navTheme,
    backSystem: useCallback(() => {
      setBackVisible(true);
    }, [])
  };

  const modalProps = {
    visible: backVisible,
    hideModal: useCallback(() => {
      setBackVisible(false);
    }, []),
    onRuturn: useCallback(() => {
      setBackVisible(false);
      sessionStorage.removeItem('user');
      histroy.push('/login');
    })
  };

  if (locations.pathname === '/login') {
    return <div>{props.children}</div>;
  }

  const layout = (
    <Layout>
      {
        menuLayout === 'sidemenu' ? (
          <SideMenu theme={navTheme} collapsed={collapsed} />
        ) : null
      }
      <Layout style={{ minHeight: '100vh' }}>
        <Header {...headerProps} />
        <Content>{props.children}</Content>
      </Layout>
      {backVisible && <BackSystemModal {...modalProps} />}
    </Layout>
  )

  return (
    <React.Fragment>
      <ContainerQuery query={query}>
        {(params) => (
          <div className={classnames(params)}>{layout}</div>
        )}
      </ContainerQuery>
    </React.Fragment>
  );
};

export default Layouts;
