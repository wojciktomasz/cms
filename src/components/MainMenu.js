import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import Posts from '../components/Posts'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setActiveItem } from "../reducers/activeItem"
import { withRouter } from 'react-router-dom'

class MainMenu extends React.Component {

  handleClick = (item) => () => {
    this.props.activeItem(item)
  }

    render() {
      return (
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item className={this.props.activatedItem === 'dashboard' ? 'blue active item' : ''} onClick={this.handleClick('dashboard')}>Dashboard</Menu.Item>
              <Link to='/main/posts'>
              <Menu.Item name='posts' className={this.props.activatedItem === 'posts' ? 'blue active item' : ''} onClick={this.handleClick('posts')}>Posts</Menu.Item>
              </Link>
              <Menu.Item className={this.props.activatedItem === 'users' ? 'blue active item' : ''} onClick={this.handleClick('users')}>Users</Menu.Item>
              <div className='right menu'>
                <Menu.Item onClick={this.props.logOut} >Log Out</Menu.Item>
              </div>
            </Container>
          </Menu>
          <Route exact path="/main/posts" component={Posts}/>
        </div>
      )
    }
  }

export default connect(
  state => ({
    activatedItem: state.activeItem.activeItem
  }),
  dispatch => ({
    activeItem: data => dispatch(setActiveItem(data))
  })
)(MainMenu)

