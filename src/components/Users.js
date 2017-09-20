import React from 'react'
import users from '../data/users.json'
import { Table, Grid } from 'semantic-ui-react'


class Users extends React.Component {

  render() {
    return (
      <div>
        <Grid
          textAlign='center'
          style={{height: '100%'}}
          verticalAlign='middle'
        >
          <Grid.Column style={{maxWidth: 850}}>
            <Table className="ui celled padded table" style={{marginTop: '10%'}}>
              <thead>
              <tr>
                <th className="single line ui center aligned">Last name</th>
                <th className="single line ui center aligned">First name</th>
                <th className="single line ui center aligned">e-mail</th>
                <th className="single line ui center aligned">type</th>
              </tr>
              </thead>
              <tbody>
                {
                  users
                    .sort((a, b) => a.email.localeCompare(b.email))
                    .map(
                    user => (
                      <tr key={user.email} className="ui center aligned">
                        <td>{user.LastName}</td>
                        <td>{user.name}</td>
                      <td>{user.email}</td>
                        <td>{user.type}</td>
                      </tr>
                    )
                  )
                }
              </tbody>
            </Table>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Users