import React from 'react'
import { Container, Menu } from 'semantic-ui-react'


class MainMenu extends React.Component {
    render() {
      return (
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item as='a'>Posts</Menu.Item>
              <Menu.Item as='a'>Users</Menu.Item>
              <div className='right menu'>
                <Menu.Item onClick={this.props.logOut} as='a'>Log Out</Menu.Item>
              </div>
            </Container>
          </Menu>
        </div>
      )
    }
  }

export default MainMenu
