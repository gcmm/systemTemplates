import React from 'react';
import { styled, keyframes } from 'troyfe';

const shining = keyframes`
 from {
     color: #999
 }
 to {
     color: #f30
 }
`;

const Wrapper = styled.div`
  font-size: 52px;
  color: #999;
  text-align: center;
  padding: 20px 0;
  h1 {
    animation: ${shining} 1s infinite;
  }
`;

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <h1>hello styled</h1>
      </Wrapper>
    );
  }
}

export default App;
