export default {
  name: 'counter',
  initialState: { number: 0 },
  reducers: {
    increment: (state) => ({ number: state.number + 1 }),
    decrement: (state) => ({ number: state.number - 1 }),
  },
}
