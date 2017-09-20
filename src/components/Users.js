import React from 'react'
import users from '../data/users.json'
import { Grid } from 'semantic-ui-react'
import ReactTable from "react-table"
import "react-table/react-table.css"


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
            <ReactTable
              data={users}
              columns={[
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "Last name",
                  accessor: "LastName"
                },
                {
                  Header: "E-mail",
                  accessor: "email"
                },
                {
                  Header: "Type",
                  accessor: "type"
                }
              ]}
              sorted={[{
                id: 'email',
                desc: false
              }]}
              defaultPageSize={10}
              className="-striped -highlight"
              style={{marginTop: '10%'}}/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Users