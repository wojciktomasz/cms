import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import Posts from '../components/Posts'
import { Link, Route } from 'react-router-dom'

class MainMenu extends React.Component {

    state = {
      activeItem: false
    }

  handleClick = () => {
    this.state.activeItem === false ?
      this.setState({
        activeItem: true
      })
      :
      this.setState({
        activeItem: false
      })
  }
    render() {
      return (
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Link to='/main/posts'>
              <Menu.Item className={this.state.activeItem ? 'active item' : ''} onClick={this.handleClick}>Posts</Menu.Item>
              </Link>
              <Menu.Item className={this.state.activeItem ? 'active item' : ''} onClick={this.handleClick}>Users</Menu.Item>
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

export default MainMenu
