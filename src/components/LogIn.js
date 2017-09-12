import users from '../data/users.json'
import React from 'react'
import {auth, getUsr} from '../reducers/logIn'
import {connect} from 'react-redux'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'



export default connect(
    state => ({}),
    dispatch => ({
        auth: () => dispatch(auth()),
        getUsr: data => dispatch(getUsr(data))
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

            const userPasswordVerification = userEmailVerification !== [] ?
                userEmailVerification[0] && (userEmailVerification[0].password === formData.password) ? true : console.log('wrong password') :
                console.log('user not registered')
            console.log(userPasswordVerification)

            const userTypeVerification = userPasswordVerification && userEmailVerification[0].type === 'admin'
            console.log(userTypeVerification)

            userPasswordVerification && userTypeVerification ? this.props.getUsr(formData) : this.props.getUsr(null)
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
                        </Grid.Column>
                    </Grid>
                </div>

            )
        }
    }
)
