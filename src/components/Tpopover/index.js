import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import { styled } from 'troyfe';

const Box = styled.div`
  .tipColTitle {
    position: relative;
    height: 18px;
    .tip-col-title-text {
      width: 100%;
      position: absolute;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .tipColContent {
    max-width: 20em;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
`;

const Tpopover = ({ text, width, content, title }) => {
  content = content || text;
  title = title || text;
  return (
    <Popover
      content={
        <Box>
          <div
            className="tipColContent"
            style={width && { width: `${width}px` }}
          >
            {content}
          </div>
        </Box>
      }
    >
      <Box>
        <div className="tipColTitle">
          <div className="tip-col-title-text">{title}</div>
        </div>
      </Box>
    </Popover>
  );
};

Tpopover.propTypes = {
  text: PropTypes.string,
  width: PropTypes.any,
  content: PropTypes.any,
  title: PropTypes.any
};

export default Tpopover;
