import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PageNotFound from './pages/404'
import Login from './pages/login'
import EventInfo from './pages/regulations'
import Team from './pages/team'
import User from './pages/user'
import Register from './pages/register'
// import FindPeople from './pages/findpeople'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact={true} component={Login}/>
      <Route path="/register" exact={true} component={Register}/>
      <Route path="/" exact={true} component={Login}/>
      <Route path="/regulations" exact={true} component={EventInfo}/>
      <Route path="/team" exact={true} component={Team}/>
      <Route path="/user/:id" exact={true} component={User}/>
      {/* <Route path="/findpeople" exact={true} component={FindPeople}/> */}
      {/* findpeople */}
      <Route path="*" component={PageNotFound}/>
    </Switch>
  </BrowserRouter>
)

export default Routes