import React from 'react'
import users from '../data/users.json'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'


class AddUsers extends React.Component {

  state = {
    data: users,
    search: ''
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = () => {

    let formData = {}
    for (const field in this.refs) {
      formData[field] = this.refs[field].value
    }
    console.log(formData)
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
            <Form onSubmit={this.handleSubmit} className='ui form' size='large'
                  style={{marginTop: '1%'}}>
              <Segment style={{paddingBottom: 0}} stacked>
                <div className="equal width fields">
                  <Form.Field>
                    <input placeholder='Enter name'
                           ref='name'
                    />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder='Enter family name'
                           ref='lastName'
                    />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder='Enter e-mail'
                           ref='email'
                    />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder='Enter type'
                           ref='type'
                    />
                  </Form.Field>

                  <Button color='blue' fluid size='medium' type='submit'>Add user</Button>
                </div>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default AddUsers