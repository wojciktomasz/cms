import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import Posts from '../components/Posts'
import { Link, Route } from 'react-router-dom'


class MainMenu extends React.Component {
    render() {
      return (
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Link to='/main/posts'>
              <Menu.Item as='a'>Posts</Menu.Item>
              </Link>
              <Menu.Item as='a'>Users</Menu.Item>
              <div className='right menu'>
                <Menu.Item onClick={this.props.logOut} as='a'>Log Out</Menu.Item>
              </div>
            </Container>
          </Menu>
          <Route exact path="/main/posts" component={Posts}/>
        </div>
      )
    }
  }

export default MainMenu
