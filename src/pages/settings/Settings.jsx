import React, { useState } from 'react';
import './settings.css'

export default function Settings(){
  const [PhoneNumber, setPhoneNumber] = useState("0456976789");
  const [Password, setPassword] = useState("********");
  const [Email, setEmail] = useState("j_doe@ewb.org.au");

  // handleChange may not be necessary given changes in data only need to be recorded when submit button is clicked
  const handleChange = (event) => {
    
    setPhoneNumber(event.target.PhoneNumber)
    setPassword(event.target.Password)
    setEmail(event.target.Email)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  const handleNewAdmin = (event) => {
    event.preventDefault();
  }

  return (
    <div className="settings-div">
      <h1 className='admin-heading'> Account Settings </h1>
      <form className="fields-div" onSubmit={handleSubmit}>

        <label for="phoneNumberId" className='settings-fields'>Phone Number</label>
        <input id="phoneNumberId" type="text" value={PhoneNumber} placeholder="Phone Number" onChange={handleChange}/>
        
        <label className='settings-fields'>Password</label>
        <input id="passwordId" type="password" value={Password} placeholder='Password' onChange={handleChange}/>

        <label className='settings-fields'>Email</label>
        <input id="emailId" type="text" value={Email} placeholder='Email' onChange={handleChange}/>
        
        <div className='submit-button-cell'>
          <button type="submit">Submit</button>
        </div>
      </form>
      
      
      <h1 className='admin-heading'> Add a New Admin </h1>
      <form className='fields-div' onSubmit={handleNewAdmin}>
        <label className='settings-fields'>Full Name</label>
        <input id="newFullNameId"type="text"/>
        
        <label className='settings-fields'>Phone Number</label>
        <input id="newPhoneNumberId" type="text"/>

        <label className='settings-fields'>Password</label>
        <input id="newPasswordId" type="password"/>

        <label className='settings-fields'>Email</label>
        <input id="newEmailId" type="text"/>

        <div className='submit-button-cell'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


