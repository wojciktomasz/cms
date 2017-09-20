import React from 'react'
import users from '../data/users.json'
import { Grid } from 'semantic-ui-react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Users extends React.Component {

  constructor() {
    super()
    this.state = {
      data: users,
      search: ''
    }
  }

  render() {
    let data = this.state.data
    let dataToDisplay = data.filter(row => row.email.includes(this.state.search) || row.name.includes(this.state.search) || row.LastName.includes(this.state.search) || row.type.includes(this.state.search))
    return (
      <div>
        <Grid
          textAlign='center'
          style={{height: '100%'}}
          verticalAlign='middle'
        >
          <Grid.Column style={{maxWidth: 850}}>
            <div className='ui fluid icon input' style={{marginTop: '10%'}}>
              <input
                placeholder='Search...'
                value={this.state.search}
                onChange={e => this.setState({search: e.target.value})}
              />
              <i className='search icon'/>
            </div>
            <ReactTable
              data={dataToDisplay}
              columns={[
                {
                  Header: 'Name',
                  accessor: 'name'
                },
                {
                  Header: 'Last name',
                  accessor: 'LastName'
                },
                {
                  Header: 'E-mail',
                  accessor: 'email'
                },
                {
                  Header: 'Type',
                  accessor: 'type'
                }
              ]}
              sorted={[{
                id: 'email',
                desc: false
              }]}
              defaultPageSize={10}
              className='-striped -highlight'
              style={{marginTop: '0.5%'}}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Users