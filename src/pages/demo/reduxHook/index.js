import React, { useState } from 'react';
import { useSelector, useDispatch } from 'troyfe';
import { Button } from 'antd';

export default function ReduxHook() {
  const [loading, setLoading] = useState(false);
  const { number } = useSelector(state => state.hookstate);
  const dispatch = useDispatch();
  const increment = () => {
    setLoading(true);
    dispatch({ type: 'hookstate/increment' });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const decrement = () => dispatch({ type: 'hookstate/decrement' });
  return (
    <div>
      <h1>redux hook</h1>
      <p>
        you number is <em>{number}</em>
      </p>
      <Button onClick={increment} loading={loading}>
        增加 +
      </Button>
      <Button onClick={decrement} loading={loading}>
        减少 -
      </Button>
    </div>
  );
}
