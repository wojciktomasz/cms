import users from '../data/users.json'
import React from 'react'
import { getUsr } from '../reducers/logIn'
import { getError } from "../reducers/errorMessage"
import { connect } from 'react-redux'
import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default connect(
  state => ({
    errorMessage: state.errorMessage.message
  }),
  dispatch => ({
    getUsr: data => dispatch(getUsr(data)),
    getError: data => dispatch(getError(data))
  })
)(
  class LogIn extends React.Component {
    constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    errorNoEmail = 'E-mail is required.'
    errorNoPassword = 'Password is required.'
    errorNoEmailAndPassword = 'E-mail and password are required.'
    errorInvalidCredentials = 'E-mail address or password incorrect. Please try again.'
    errorCheck = error => this.props.errorMessage === error

    handleSubmit = () => {

      const formData = {}
      for (const field in this.refs) {
        formData[field] = this.refs[field].value
      }

      const userEmailVerification = users.filter(user => user.email === formData.email)
      const userPasswordVerification = userEmailVerification[0] && (userEmailVerification[0].password === formData.password)
      const userTypeVerification = userPasswordVerification && userEmailVerification[0].type === 'admin'

      console.log(this.props.getUsr(formData))
      userPasswordVerification && userTypeVerification ? this.props.getUsr(formData) : this.props.getUsr(null)
      const displayErrorFor = ms => setTimeout(() => this.props.getError(null), ms)

      const errorMessage = userEmailVerification === [] || (userEmailVerification.length > 0 && !userPasswordVerification) || !userPasswordVerification || !userTypeVerification ? this.errorInvalidCredentials : null
      errorMessage && this.props.getError(errorMessage) && displayErrorFor(5000)

      const errorMessageEmailFieldEmpty = formData.email === "" && formData.password !== "" ? this.errorNoEmail : null
      errorMessageEmailFieldEmpty && this.props.getError(errorMessageEmailFieldEmpty) && displayErrorFor(5000)

      const errorMessagePasswordFieldEmpty = formData.password === "" && formData.email !== "" ? this.errorNoPassword : null
      errorMessagePasswordFieldEmpty && this.props.getError(errorMessagePasswordFieldEmpty) && displayErrorFor(5000)

      const errorMessageEmailAndPasswordFieldEmpty = formData.password === "" && formData.email === "" ? this.errorNoEmailAndPassword : null
      errorMessageEmailAndPasswordFieldEmpty && this.props.getError(errorMessageEmailAndPasswordFieldEmpty) && displayErrorFor(5000)

    }
    loadMain = () => {
      window.location = '/main'
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
                      error={this.errorCheck(this.errorNoEmail) || this.errorCheck(this.errorNoEmailAndPassword) || this.errorCheck(this.errorInvalidCredentials)}>
                      <input ref='email'
                             type='text'
                             name='email'
                             placeholder='Enter e-mail'/>
                    </Form.Field>
                  </div>
                  <div className="field">
                    <label>password</label>
                    <Form.Field
                      error={this.errorCheck(this.errorNoEmailAndPassword) || this.errorCheck(this.errorNoPassword) || this.errorCheck(this.errorInvalidCredentials)}>
                      <input ref='password'
                             type='password'
                             name='password'
                             placeholder='Enter password'/>
                    </Form.Field>
                  </div>
                  <Link to='/main'>
                  <Button color='teal' fluid size='large' type='submit' >Login</Button>
                  </Link>
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
)
