import React from 'react'
import {auth} from '../reducers/logIn'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'


export default connect(
    state => ({}),
    dispatch => ({
        auth: () => dispatch(auth())
    })
)(
    class LogIn extends React.Component {


        render() {
            return (
                <div>
                    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                    <Grid
                        textAlign='center'
                        style={{height: '100%', marginTop: '5%'}}
                        verticalAlign='middle'
                    >
                        <Grid.Column style={{maxWidth: 450}}>
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Input
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='E-mail address'
                                    />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                    />
                                    <Link to="/main">
                                        <Button color='instagram' fluid size='large' onClick={this.props.auth}>Login</Button>
                                    </Link>
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </div>

            )
        }
    }
)
