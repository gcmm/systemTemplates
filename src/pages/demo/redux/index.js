import React from 'react';
import { connect } from 'troyfe';
import { Button } from 'antd';

function Counter({ counter, dispatch }) {
  console.log('counter', counter);
  return (
    <div>
      <h1>you number is {counter.number}</h1>
      <Button onClick={() => dispatch({ type: 'counter/increment' })}>
        increment +
      </Button>
    </div>
  );
}

export default connect(({ counter }) => ({ counter }))(Counter);
