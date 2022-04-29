import React, { useState, Component} from 'react';
import './settings.css'

export default function Settings(){
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
        <label>
          <p className='settings-field'>Username</p>

        </label>
        <label>
          <p className='settings-field'>Password</p>

        </label>
        <label>
          <p className='settings-field'>Email</p>

        </label>
      </div>
    </div>
  )
}


