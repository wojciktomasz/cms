import users from '../data/users.json'
import React from 'react'
import {auth, getUsr} from '../reducers/logIn'
import {connect} from 'react-redux'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'


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
            this.props.getUsr(formData)
            console.log(users)
        }

        render() {
            return (
                <div className='login-form'>
                    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                    <Grid
                        textAlign='center'
                        style={{height: '100%'}}
                        verticalAlign='middle'
                    >
                        <Grid.Column style={{maxWidth: 450}}>
                            <form onSubmit={this.handleSubmit} className='ui form' size='large'>
                                <Segment stacked>
                                    <div className="field">
                                        <label>e-mail</label>
                                        <input ref='email' type='text' name='email' placeholder='Enter e-mail'/>
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <input ref='password' type='password' name='password'
                                               placeholder='Enter password'/>
                                    </div>
                                    <button className='ui button' type='submit'>Login</button>
                                </Segment>
                            </form>
                        </Grid.Column>
                    </Grid>
                </div>

            )
        }
    }
)
