import React from 'react'
import { getUsr } from '../reducers/logIn'
import { getError } from "../reducers/errorMessage"
import { connect } from 'react-redux'
import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { errors } from '../helpers/errorMessages'
import { verifyFormInput } from '../helpers/verifyFormInput'


class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  errorCheck = error => this.props.errorMessage === error

  handleSubmit = () => {

    let formData = {}
    for (const field in this.refs) {
      formData[field] = this.refs[field].value
    }

    verifyFormInput(this.props.getUsr, this.props.getError, this.loadMain, formData)
  }

  loadMain = () => {
    this.props.history.push('/main')
  }

  render() {
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{height: '100%'}}
          verticalAlign='middle'
        >
          <Grid.Column style={{maxWidth: 450}}>
            <Form onSubmit={this.handleSubmit} className='ui form' size='large'
                  style={{marginTop: '20%'}}>
              <Segment stacked>
                <div className="field">
                  <label>e-mail</label>
                  <Form.Field
                    error={this.errorCheck(errors.errorNoEmail) || this.errorCheck(errors.errorNoEmailAndPassword) || this.errorCheck(errors.errorInvalidCredentials)}>
                    <input ref='email'
                           type='text'
                           name='email'
                           placeholder='Enter e-mail'/>
                  </Form.Field>
                </div>
                <div className="field">
                  <label>password</label>
                  <Form.Field
                    error={this.errorCheck(errors.errorNoEmailAndPassword) || this.errorCheck(errors.errorNoPassword) || this.errorCheck(errors.errorInvalidCredentials)}>
                    <input ref='password'
                           type='password'
                           name='password'
                           placeholder='Enter password'/>
                  </Form.Field>
                </div>
                <Button color='blue' fluid size='large' type='submit' >Login</Button>
              </Segment>
            </Form>
            {this.props.errorMessage &&
            <Message>
              {this.props.errorMessage}
            </Message>
            }
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}

export default connect(
  state => ({
    errorMessage: state.errorMessage.message
  }),
  dispatch => ({
    getUsr: data => dispatch(getUsr(data)),
    getError: data => dispatch(getError(data))
  })
)(withRouter(LogIn))
