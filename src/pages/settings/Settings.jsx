import React, { useState } from 'react';
import './settings.css';
import { admin_sign_up } from '../../graphql/mutations.jsx';
import { get_admin_user } from '../../graphql/queries.jsx';
import { useMutation, useQuery } from '@apollo/client';
import jwt_decode from 'jwt-decode';


export default function Settings(){
   const currentToken = localStorage.getItem('token').replace('Bearer ' , '');
const decoded = jwt_decode(currentToken); 

  const result= useQuery(get_admin_user, {
    variables: {
      userId:decoded.id
    }
  });
  // result.data.getAdminuser.username;
  //   result.data.getAdminuser.username;
  //     result.data.getAdminuser.username;
  //       result.data.getAdminuser.username;
  // States for current admin account
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");

  // States for new admin account
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const [AdminSignUp, { token, error }] = useMutation(admin_sign_up);

  // handleChange may not be necessary given changes in data only need to be recorded when submit button is clicked
  const handleChange = (event) => {
    
    setPhoneNumber(event.target.PhoneNumber)
    setPassword(event.target.Password)
    setUsername(event.target.Username)
  }
  
  const handleNewAdminChange = (event) => {
    setNewName(event.target.newName)
    setNewUsername(event.target.newUsername)
    setNewPhoneNumber(event.target.newPhoneNumber)
    setNewPassword(event.target.newPassword)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

  };

  async function signUp(credentials) {
    console.log(credentials);
    const user = await AdminSignUp({
			variables: { name: credentials?.name, password: credentials?.password, phoneNumber: credentials?.phoneNumber, username: credentials?.username },
			result: {
				token,
				error
			}
		});
		return Promise.resolve(user.data.adminSignUp.token);
  };

  const handleNewAdmin = async (event) => {
    event.preventDefault();
    const response = await signUp({
      name: newName,
      password: newPassword,
      phoneNumber: newPhoneNumber,
      username: newUsername,
    })
    .then(({ data }) => {
      window.alert("Account signup successful");
    })
    .catch(e => {
      window.alert("Account signup unsuccessful:" + "\n\nUsername already in use");
    });
  }

  return (
    <div className="settings-div">
      <h1 className='settingsHeader'>Settings</h1>
      <h2 className='admin-heading'> Account Settings </h2>
      <form className="fields-div" onSubmit={handleSubmit}>

        <label for="phoneNumberId" className='settings-fields'>Phone Number</label>
        <input id="phoneNumberId" type="text" value={result?.data?.getAdminUser.phone_number} placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
        
        <label className='settings-fields'>Full Name</label>
        <input id="passwordId" type="text" value={ result?.data?.getAdminUser.name} placeholder='Full Name' onChange={(e) => setPassword(e.target.value)}/>

        <label className='settings-fields'>Username</label>
        <input id="usernameId" type="text" value={ result?.data?.getAdminUser.username} placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        
        <div className='submit-button-cell'>
          <button type="submit">Submit</button>
        </div>
      </form>
      
      
      <h2 className='admin-heading'> Add a New Admin </h2>
      <form className='fields-div' onSubmit={handleNewAdmin}>
        <label className='settings-fields'>Full Name</label>
        <input id="newFullNameId"type="text" value={newName} placeholder='Full Name'  onChange={(e) => setNewName(e.target.value)}/>
        
        <label className='settings-fields'>Phone Number</label>
        <input id="newPhoneNumberId" type="text" value={newPhoneNumber}  placeholder='Phone Number'  onChange={(e) => setNewPhoneNumber(e.target.value)}/>

        <label className='settings-fields'>Password</label>
        <input id="newPasswordId" type="password" value={newPassword} placeholder='Password' onChange={(e) => setNewPassword(e.target.value)}/>

        <label className='settings-fields'>Username</label>
        <input id="newUsernameId" type="text" value={newUsername} placeholder='Username' onChange={(e) => setNewUsername(e.target.value)}/>

        <div className='submit-button-cell'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


