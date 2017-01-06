import React from 'react'

import { render } from 'react-dom'

import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'

import Login from './modules/Login'

import Register from './modules/Register'

import Add from './modules/Add'
import Delete from './modules/Delete'
import Update from './modules/Update'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>

    <Route path="/add" component={Add}/>
    <Route path="/delete" component={Delete}/>
    <Route path="/update" component={Update}/>
  </Router>
), document.getElementById('app'))
