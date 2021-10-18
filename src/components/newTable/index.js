import React, { useState, useEffect } from 'react';
import { Pagination, Row, Col, Spin } from 'antd';
import request from '../../utils/request';

const NewTable = WarppedComponent => props => {
  const [pageSizes, setPageSizes] = useState(9);
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { url, fields, refresh, ...otherProps } = props;

  useEffect(() => {
    setLoading(true);
    request(url, {
      method: 'POST',
      body: {
        ...fields
      }
    }).then(res => {
      setLoading(false);
      if (res.success) {
        setPageSizes(9);
        setCurrent(1);
        setData(res.data);
      }
    });
  }, [refresh]);

  useEffect(() => {
    getCurrentPageData();
  }, [data, pageSizes, current]);

  const getCurrentPageData = () => {
    if (data.length > 0) {
      const startNum = (current - 1) * pageSizes;
      const endNum = current * pageSizes;
      setCurrentPageData(data.slice(startNum, endNum));
    }
  };

  const onChangePage = (page, pageSize) => {
    setCurrent(page);
    setPageSizes(pageSize);
  };

  return (
    <div>
      <Spin spinning={loading}>
        <WarppedComponent record={currentPageData} {...otherProps} />
        <Row>
          <Col style={{ marginTop: '15px', width: '100%', textAlign: 'right' }}>
            <Pagination
              current={current}
              total={data.length}
              onChange={onChangePage}
              pageSize={pageSizes}
            />
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default NewTable;
