import { React } from 'react'

import './users.css'
import CustomPaginationActionsTable from '../../components/table/Table'

export default function Users() {
  return (
    <div className="usersContainer">
      <div className='usersRolesContainer'>
        <button className={({ isActive }) => (isActive ? "users_tabActive" : "users_tabinActive")}>Clients</button>
        <button className={({ isActive }) => (isActive ? "users_tabActive" : "users_tabinActive")}>Operators</button>
      </div>

      <div className='usersFilterContainer'>
        <input placeholder='Filter Users'></input>
        <div className='userControls'>
          <button className='users_button'>Edit</button>
          <button className='users_button'>Delete</button>
        </div>
      </div>
      <div className='usersTableContainer'>
        <CustomPaginationActionsTable></CustomPaginationActionsTable>
      </div>
    </div>
  )
}
