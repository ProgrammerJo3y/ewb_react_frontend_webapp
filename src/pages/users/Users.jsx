import { React } from 'react'

import './users.css'
import MatUITable from '../../components/table/Table'

export default function Users() {
  return (
    <div className="usersContainer">
      <div className='usersRolesContainer'>

        <input type="radio" name="select" id="client_option" checked/>
        <input type="radio" name="select" id="operator_option"/>

        <label for="client_option" class="option client_option">
          <span>Clients</span>
        </label>
        <label for="operator_option" class="option operator_option">
          <span>Operators</span>
        </label>

      </div>

      <div className='usersFilterContainer'>
        <input placeholder='Filter Users'></input>
        <div className='userControls'>
          <button className='users_button'>Edit</button>
          <button className='users_button'>Delete</button>
        </div>
      </div>
      <div className='usersTableContainer'>
        <MatUITable></MatUITable>
      </div>
    </div>
  )
}
