import React from 'react'
import MainMenu from '../containers/MainMenu'
import { Route } from 'react-router'
import Users from '../containers/Users'
import Posts from '../components/Posts'
import Dashboard from '../components/Dashboard'


class MainView extends React.Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <Route exact path='/main' component={Dashboard}/>
        <Route path='/main/posts' component={Posts}/>
        <Route path='/main/users' component={Users}/>
      </div>
    )
  }
}

export default MainView