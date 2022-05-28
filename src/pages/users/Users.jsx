import { React, useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import './users.css'
import MatUITable from '../../components/table/Table'
import { clients_and_operators } from '../../graphql/queries';
import { delete_user } from '../../graphql/mutations';
const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "phone_number", headerName: "Phone Number", flex: 1 },
  { field: "role", headerName: "Role", flex: 1 },
  { field: "username", headerName: "Username", flex: 1 },

];


export default function Users() {


const result= useQuery(clients_and_operators);
  const [filter, setFilter] = useState([]);
  const [filteredItems, setFilteredItems] = useState({});
  const [DeleteUser, { token, error }] = useMutation(delete_user);
 const [selectionModel, setSelectionModel] = useState([]);

  const  DeleteUseronClick = async e =>{
    // if(selectionModel){
    // console.log(selectionModel);
await DeleteUser ({
  variables: {
    userId : selectionModel.length
  },
  result :{
    token, error
  }
});
    // }else {
return;
    // }
  }
  useEffect(() => {
    const keys = Object.keys(filter);;
    if (!result.loading) {
      // console.log( result.data.ClientsAndOperators);
    let items = result.data.ClientsAndOperators.filter((row) => {
      let isMatch = true;
        keys.forEach((key) => {
      if (!row[key].toString().toLowerCase().startsWith(filter.toLowerCase())) isMatch = false;
             });
      return isMatch;
    });
    setFilteredItems(items);
  }
  }, [filter , result.loading]);

  if(result.loading){
    // console.log('LOADING')
    return(
      <div>...loading</div>
    )
  }
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
          <button className='users_button' onClick={DeleteUseronClick}>Delete</button>
        </div>
      </div>
      <div className='usersTableContainer'>
        <MatUITable 
        columns={columns}
        rows={filteredItems} 
        checkboxSelection
      //   onSelectionModelChange={(newSelection) => {
      //     console.log('newSelection ',newSelection);
      //     setSelectionModel(newSelection);
      // }}
    //     //  selectionModel={selectionModel}
     />
    {/* //       {selectionModel.map(val =><h1>{val}</h1>)} */}
      </div>
    </div>
  )
}
