export default {
  name: 'todo',
  initialState: { list: [] },
  reducers: {
    fetchList: (_, { payload }) => ({ list: payload }),
  },
}
