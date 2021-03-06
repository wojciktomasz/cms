import React from 'react'
import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react'
import { verifyFormInput } from '../helpers/verifyFormInput'
import { errorOnEmailField, errorOnPasswordField } from '../helpers/checkForErrorMessages'

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

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
                <div className='field'>
                  <label>e-mail</label>
                  <Form.Field
                    error={errorOnEmailField(this.props.errorMessage)}>
                    <input ref='email'
                           type='text'
                           name='email'
                           placeholder='Enter e-mail'/>
                  </Form.Field>
                </div>
                <div className='field'>
                  <label>password</label>
                  <Form.Field
                    error={errorOnPasswordField(this.props.errorMessage)}>
                    <input ref='password'
                           type='password'
                           name='password'
                           placeholder='Enter password'/>
                  </Form.Field>
                </div>
                <Button color='blue' fluid size='large' type='submit'>Login</Button>
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

export default LogIn
