import React from 'react';
import { Modal } from 'antd';
import { styled } from 'troyfe';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const BackContent = styled.div`
  span {
    margin-left: 15px;
    font-size: '30px';
  }
`;

const BackSystemModal = ({ visible, hideModal, onRuturn }) => {
  return (
    <Modal
      visible={visible}
      onCancel={hideModal}
      onOk={onRuturn}
      okText="退出"
      cancelText="取消"
    >
      <BackContent>
        <ExclamationCircleOutlined
          style={{ color: '#ea1346', fontSize: '40px' }}
        />
        <span>确定要退出系统吗？</span>
      </BackContent>
    </Modal>
  );
};

export default BackSystemModal;
