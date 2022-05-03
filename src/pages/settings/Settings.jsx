import React, { useState, Component} from 'react';
import './settings.css'

export default function Settings(){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  
  const username_state = {
    value: "Some name",
    isInEditMode: false
  }

  const password_state = {
    value: "Some password",
    isInEditMode: false
  }

  const email_state = {
    value: "Some email",
    isInEditMode: false
  }

  return (
    <div className="settings-div">
      <h1> Settings </h1>
      <div className="fields-div">
        <label className='settings-fields'>
          <p className='settings-text'>Username</p>
          <input type="text" value="0456976789"/>
        </label>
        <label className='settings-fields'>
          <p className='settings-text'>Password</p>
          <input type="text" value="********" />
        </label>
        <label className='settings-fields'>
          <p className='settings-text'>Email</p>
          <input type="text" value="j_doe@ewb.org.au" />
        </label>
      </div>
      <div className='submit-button-div'>
        <button type="submit" className='settings-submit'>Submit</button>
      </div>
    </div>
  )
}


