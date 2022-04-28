import React, { useState } from 'react';
import './settings.css'

export default function Settings() {
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


