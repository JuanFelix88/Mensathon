import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/login'
import EventInfo from './pages/regulations'
import Main from './pages/main'
import User from './pages/user'
import FindPeople from './pages/findpeople'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact={true} component={Login}/>
      <Route path="/regulations" exact={true} component={EventInfo}/>
      <Route path="/main" exact={true} component={Main}/>
      <Route path="/user/:id" exact={true} component={User}/>
      <Route path="/findpeople" exact={true} component={FindPeople}/>
      {/* findpeople */}
      <Route path="*" component={Login}/>
    </Switch>
  </BrowserRouter>
)

export default Routes