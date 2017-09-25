import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addUser } from '../reducers/addUser'
import { getError } from '../reducers/errorMessage'
import { verifyAddUserForm } from '../helpers/verifyAddUserForm'



class AddUsers extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    userAdded: false
  }

  handleSubmit = () => {

    let formData = {}
    for (const field in this.refs) {
      formData[field] = this.refs[field].value
    }
    
    verifyAddUserForm(this.props.addUser, formData)

    this.setState({
      userAdded: true
    })
  }

  handleClearForm = () => {
    this.setState({
      userAdded: false
    })
  }

  render() {
    return (
      <div>
        <Grid
          textAlign='center'
          style={{height: '100%'}}
          verticalAlign='middle'
        >
          <Grid.Column style={{maxWidth: 850}}>
            {this.state.userAdded &&
            <div className='ui blue segment' style={{marginTop: '1%'}}>New User Added</div>
            }
            <Form onSubmit={this.handleSubmit} className='ui form' size='large'
                  style={{marginTop: '1%'}}>
              <Segment style={{paddingBottom: 0}} stacked>
                <div className='equal width fields'>
                  <div className='required field'>
                    <label>First name</label>
                    <Form.Field>
                      <input placeholder='Enter name'
                             ref='name'
                      />
                    </Form.Field>
                  </div>
                  <div className='required field'>
                    <label>Last name</label>
                    <Form.Field>
                      <input placeholder='Enter last name'
                             ref='lastName'
                      />
                    </Form.Field>
                  </div>
                </div>
                <div className='equal width fields'>
                  <div className='required field'>
                    <label>E-mail</label>
                    <Form.Field>
                      <input placeholder='Enter e-mail'
                             ref='email'
                      />
                    </Form.Field>
                  </div>
                  <div className='required field'>
                    <label>Phone number</label>
                    <Form.Field>
                      <input placeholder='Enter phone number'
                             ref='phone'
                      />
                    </Form.Field>
                  </div>
                  <div className='field'>
                    <label>Type</label>
                    <Form.Field>
                      <select ref='type' style={{height: '37px'}}>
                        <option defaultValue='user'>user</option>
                        <option defaultValue='admin'>admin</option>
                      </select>
                    </Form.Field>
                  </div>
                </div>
                <div className='equal width fields'>
                  <Button color='blue' fluid size='medium' type='submit'>Add new user</Button>
                  <Button color='blue' fluid size='medium' type='reset' onClick={this.handleClearForm}>Clear Form</Button>
                </div>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    addUser: data => dispatch(addUser(data)),
    getError: data => dispatch(getError(data))
  })
)(AddUsers)