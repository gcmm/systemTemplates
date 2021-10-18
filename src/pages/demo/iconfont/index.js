import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { styled } from 'troyfe';

const IconFont = createFromIconfontCN({
  scriptUrl: '/icons/iconfont.js'
});

const IconWrap = styled.div`
  font-size: 64px;
`;

export default function Home() {
  return (
    <IconWrap>
      <IconFont
        type="icon-wenjianjia"
        style={{ fontSize: 64, color: '#f30' }}
      />
      <IconFont type="icon-icon-test" />
      <IconFont type="icon-icon-test1" />
      <IconFont type="icon-icon-test1" />
      <IconFont type="icon-icon-test2" />
    </IconWrap>
  );
}
