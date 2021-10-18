import { hot } from 'react-hot-loader/root'
import React from 'react'
import './global.css'
import Router from './pages/.cache/router'

class App extends React.PureComponent {
  render() {
    return <Router />
  }
}

export default hot(App)
