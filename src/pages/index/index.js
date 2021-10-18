import React, { useState, useEffect } from 'react';
import { request } from 'utils'

export default function Page() {

  const [datas, setDatas] = useState({})

  useEffect(() => {
    request('/api/testData', {
      method: 'POST',
      body: {}
    }).then(res => {
      if (res.success) {
        console.log('data', res.data)
        setDatas(res.data)
      }
    })
  }, [])

  return (
    <div>Hello World</div>
  );
}


