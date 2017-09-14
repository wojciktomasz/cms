import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { unauth } from '../reducers/logIn'

export default connect(
  state => ({}),
  dispatch => ({
    unauth: () => dispatch(unauth())
  })
)(
  class MainMenu extends React.Component {
    render() {
      return (
        <div>
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item as='a'>Home</Menu.Item>
                <Menu.Item onClick={this.props.unauth} as='a'>Log Out</Menu.Item>
            </Container>
          </Menu>
        </div>
      )
    }
  }
)