import users from '../data/users.json'
import React from 'react'
import { getUsr } from '../reducers/logIn'
import { getError } from "../reducers/errorMessage"
import { connect } from 'react-redux'
import {Button, Form, Grid, Segment, Message} from 'semantic-ui-react'



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
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit(e) {
            e.preventDefault()

            const formData = {}
            for (const field in this.refs) {
                formData[field] = this.refs[field].value;
            }
            console.log(users)
            console.log(formData)

            const userEmailVerification = users.filter(user => user.email === formData.email)
            console.log(userEmailVerification)

            const userPasswordVerification = userEmailVerification[0] && (userEmailVerification[0].password === formData.password)
            console.log(userPasswordVerification)

            const userTypeVerification = userPasswordVerification && userEmailVerification[0].type === 'admin'
            console.log(userTypeVerification)

            userPasswordVerification && userTypeVerification ? this.props.getUsr(formData) : this.props.getUsr(null)

            const errorMessage = userEmailVerification === [] || !userPasswordVerification || !userTypeVerification ? 'E-mail address or password incorrect. Please try again.' : null
            console.log(errorMessage)
            errorMessage && this.props.getError(errorMessage) && setTimeout(()=>this.props.getError(null), 5000)

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
                            <Form onSubmit={this.handleSubmit} className='ui form' size='large' style={{ marginTop: '20%' }}>
                                <Segment stacked>
                                    <div className="field">
                                        <label>e-mail</label>
                                        <input ref='email' type='text' name='email' placeholder='Enter e-mail'/>
                                    </div>
                                    <div className="field">
                                        <label>password</label>
                                        <input ref='password' type='password' name='password'
                                               placeholder='Enter password'/>
                                    </div>
                                    <Button color='teal' fluid size='large' type='submit'>Login</Button>
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
