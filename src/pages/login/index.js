import React, { useState } from 'react';
import { Form, Button, Input, Row, message } from 'antd';
import { styled, useHistory } from 'troyfe';
import { request, api } from 'utils';

const LoginForm = styled.div`
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -160px 0 0 -160px;
    width: 320px;
    height: 320px;
    padding: 36px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);

    button {
      width: 100%;
    }

    p {
      color: rgb(204, 204, 204);
      text-align: center;
      margin-top: 16px;
      width: 100%;
    }
  }
  .loginimg {
    position: absolute;
    top: 2%;
    left: 1%;
    border-style: none;
  }
  .logo {
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    margin-bottom: 24px;

    img {
      width: 40px;
      margin-right: 8px;
    }

    span {
      vertical-align: text-bottom;
      font-size: 16px;
      text-transform: uppercase;
      display: inline-block;
    }
  }
`;

const Login = () => {
  const [loginLoading, setLoginLoading] = useState(false);

  const [form] = Form.useForm();
  const histroy = useHistory();

  const handleOk = () => {
    setLoginLoading(true);
    form
      .validateFields()
      .then(values => {
        request(api.userLogin, {
          method: 'POST',
          body: {
            ...values
          }
        }).then(res => {
          if (res.success) {
            histroy.push('/');
            sessionStorage.setItem('userInfo', JSON.stringify(values));
          }
        }).finally(() => {
          setLoginLoading(false)
        })
      })
      .catch(info => {
        console.log('info', info);
      });
  };

  return (
    <LoginForm>
      <img alt={'logo'} src="/logo.png" className="loginimg" />
      <div className="form">
        <div className="logo">
          <span>创意信息</span>
        </div>
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名'
              }
            ]}
          >
            <Input
              size="large"
              onPressEnter={handleOk}
              placeholder="登录账号"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码'
              }
            ]}
          >
            <Input
              size="large"
              onPressEnter={handleOk}
              type="password"
              placeholder="登录账号"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Row>
            <Button
              type="primary"
              size="large"
              onClick={handleOk}
              loading={loginLoading}
            >
              登 录
            </Button>
            <p>
              <span>@copyright TROY 创意信息</span>
            </p>
          </Row>
        </Form>
      </div>
    </LoginForm>
  );
};

export default Login;
