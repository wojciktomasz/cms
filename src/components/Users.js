import React from 'react'
import users from '../data/users.json'
import { Grid } from 'semantic-ui-react'
import ReactTable from 'react-table'
import { filteredUsers } from '../helpers/filterUsers'
import AddUsers from '../components/AddUser'
import { connect } from 'react-redux'
import { addDataToDisplay } from '../helpers/addDataToDisplay'

class Users extends React.Component {

  state = {
      data: users,
      search: ''
    }

  render() {
    let data = this.state.data
    let dataFiltered = filteredUsers(data, this.state.search)
    let dataToDisplay = this.props.userToAdd !== null ? addDataToDisplay(dataFiltered, this.props.userToAdd) : dataFiltered

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
                  accessor: 'lastName'
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
            {console.log(this.props.userToAdd)}
            <AddUsers/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(
  state => ({
    userToAdd: state.addUser.userToAdd
  }),
  dispatch => ({})
)(Users)