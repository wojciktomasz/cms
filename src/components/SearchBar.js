import React from 'react'
import users from '../data/users.json'

class SearchBar extends React.Component {

  constructor() {
    super()
    this.state = {
      data: users,
      search: ''
    }
  }

  render() {

  <div className='ui fluid icon input' style={{marginTop: '10%'}}>
    <input
      placeholder='Search...'
      value={this.state.search}
      onChange={e => this.setState({search: e.target.value})}
    />
    <i className='search icon'/>
  </div>
}}

export default SearchBar