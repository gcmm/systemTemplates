import React from 'react'
import { Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

export default function Demo() {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Hook demo" bordered={false}>
            <Link to="/demo/hook">check it!</Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  )
}
