import React, { Component } from 'react';
import { List, Avatar, Button } from 'antd';
import { styled, connect } from 'troyfe';
import getUserRepos from './api';

const BtnWrapper = styled.div`
  text-align: center;
`;

export class ReduxThunk extends Component {
  getlist = async () => {
    const { dispatch } = this.props;
    const list = await getUserRepos();
    dispatch({ type: 'todo/fetchList', payload: list });
  };

  render() {
    const { todo } = this.props;
    return (
      <div>
        <h1>redux connect</h1>
        <h1>ReduxThunk List</h1>
        <List
          itemLayout="horizontal"
          dataSource={todo.list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href={item.homepage}>{item.name}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
        <BtnWrapper>
          <Button type="primary" onClick={this.getlist}>
            获取数据
          </Button>
        </BtnWrapper>
      </div>
    );
  }
}

export default connect(({ todo }) => ({ todo }))(ReduxThunk);
