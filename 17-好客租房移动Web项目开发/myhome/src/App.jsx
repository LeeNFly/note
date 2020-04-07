import React from 'react';

import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Login from '../src/components/Login.jsx'
import Home from '../src/components/Home.jsx'

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/login">登录</Link></li>
        <li><Link to="/home">首页</Link></li>
      </ul>
      <Switch>
        <Redirect exact from="/" to="/login" ></Redirect>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default App;
