import { React, useEffect, useState } from 'react'

import './users.css'
import MatUITable from '../../components/table/Table'

const columns = [
  {id: "name", label: "Name"},
  {id: "phone", label: "Mobile Number"},
  {id: "location", label: "Location"},
]

const data = [
  {name: "Jeff", phone: "0123456789", location: "home"},
  {name: "Jeff", phone: "0123456789", location: "home"},
  {name: "Jason", phone: "0123456789", location: "home"},
  {name: "Bill", phone: "1234567890", location: "work"},
  {name: "Bethany", phone: "1234567890", location: "work"}
]

export default function Users() {

  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState(data);

  useEffect(() => {
    const key = "name";

    let items = data.filter((row) => {
      let isMatch = true;
      if (!row[key].toString().toLowerCase().startsWith(filter.toLowerCase())) isMatch = false;
      return isMatch;
    });
    setFilteredItems(items);
  }, [filter]);

  return (
    <div className="usersContainer">
      <h1 className="usersHeading">Users</h1>
      <div className='usersRolesContainer'>

        <input type="radio" name="select" id="client_option" defaultChecked/>
        <input type="radio" name="select" id="operator_option"/>

        <label htmlFor="client_option" className="option client_option">
          <span>Clients</span>
        </label>
        <label htmlFor="operator_option" className="option operator_option">
          <span>Operators</span>
        </label>

      </div>

      <div className='usersFilterContainer'>
        <input placeholder='Filter Users' onChange={(e) => setFilter(e.target.value)}></input>
        <div className='userControls'>
          <button className='users_button'>Edit</button>
          <button className='users_button'>Delete</button>
        </div>
      </div>
      <div className='usersTableContainer'>
        <MatUITable columns={columns} rows={filteredItems} />
      </div>
    </div>
  )
}
