import React, { useState, Component} from 'react';
import './settings.css'

export default function Settings(){
  const [PhoneNumber, setPhoneNumber] = useState("0456976789");
  const [Password, setPassword] = useState("********");
  const [Email, setEmail] = useState("j_doe@ewb.org.au");

  const handleChange = (event) => {
    
    setPhoneNumber(event.target.PhoneNumber)
    setPassword(event.target.Password)
    setEmail(event.target.Email)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <div className="settings-div">
      <h1 className='admin-heading'> Settings </h1>
      <form className="fields-div" onSubmit={handleSubmit}>
        <label className='settings-fields'>
          <p className='settings-text'>Phone Number</p>
          <input type="text" value={PhoneNumber} placeholder='0456976789' onChange={handleChange}/>
        </label>
        <label className='settings-fields'>
          <p className='settings-text'>Password</p>
          <input type="text" value={Password} placeholder='********'/>
        </label>
        <label className='settings-fields'>
          <p className='settings-text'>Email</p>
          <input type="text" value={Email} placeholder='j_doe@ewb.org.au'/>
        </label>
        <div className='settings-submit-button-div'>
        <button type="submit" className='settings-submit'>Submit</button>
        </div>
      </form>
      
      
      <h1 className='admin-heading'> Add a New Admin </h1>
      <form className='add-admin-fields-div' onSubmit={handleSubmit}>
        <label className='settings-fields'>
          <p className='settings-text'>Full Name</p>
          <input type="text"/>
        </label>
        <label className='settings-fields'>
          <p className='settings-text'>Phone Number</p>
          <input type="text"/>
        </label>
        <label className='settings-fields'>
          <p className='settings-text'>Password</p>
          <input type="text"/>
        </label>
        <label className='settings-fields'>
          <p className='settings-text'>Email</p>
          <input type="text"/>
        </label>
        <div className='settings-submit-button-div'>
          <button type="submit" className='settings-submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}


