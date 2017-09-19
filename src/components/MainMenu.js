import React from 'react'
import { Container, Menu } from 'semantic-ui-react'


class MainMenu extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (item) => () => {
    this.props.activeItem(item)
    this.loadComponent(item)
  }

  loadComponent = (name) => {
    this.props.history.push('/main/' + name)
  }

  handleLogOut = () => {
    this.props.unauth()
    this.props.setInitialState()
  }


  render() {
      return (
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item className={this.props.activatedItem === '' ? 'blue active item' : ''} onClick={this.handleClick('')}>Dashboard</Menu.Item>
              <Menu.Item name='posts' className={this.props.activatedItem === 'posts' ? 'blue active item' : ''} onClick={this.handleClick('posts')}>Posts</Menu.Item>
              <Menu.Item className={this.props.activatedItem === 'users' ? 'blue active item' : ''} onClick={this.handleClick('users')}>Users</Menu.Item>
              <div className='right menu'>
                <Menu.Item onClick={this.handleLogOut} >Log Out</Menu.Item>
              </div>
            </Container>
          </Menu>
        </div>
      )
    }
  }

export default MainMenu

