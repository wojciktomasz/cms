import React from 'react'
import MainMenu from '../containers/MainMenu'
import { Route } from 'react-router'
import Users from '../components/Users'
import Posts from '../components/Posts'


class MainView extends React.Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <h1 style={{marginTop: '5%'}}>CMS</h1>
        <Route path='/main/posts' component={Posts}/>
        <Route path='/main/users' component={Users}/>
      </div>
    )
  }
}

export default MainView