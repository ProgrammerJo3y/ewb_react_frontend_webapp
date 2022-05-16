import { React } from 'react'

import './users.css'

export default function Users() {
  return (
    <div className="usersContainer">
      <div className='usersRolesContainer'>
        <button>Clients</button>
        <button>Operators</button>
      </div>

      <div className='usersFilterContainer'>
        <input placeholder='Filter Users'></input>
        <div className='userControls'>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div className='usersTableContainer'>

      </div>
    </div>
  )
}
