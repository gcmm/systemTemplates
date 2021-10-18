
const proxy = {
  _proxy: {
    proxy: {},
    changeHost: true,
  },
  'POST /api/testData': (req, res) => {
    return res.json({
      code: 200,
      msg: '成功',
      data: {
        id: 1,
        name: '测试',
        value: 111
      }
    })
  }
}

module.exports = proxy;
