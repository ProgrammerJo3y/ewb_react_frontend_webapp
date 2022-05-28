import React from 'react'
import "./topbar.css"
import mamaLeafLogo from "./../../assets/images/mammaslaeflogo.png"
import logOutIcon from '../../assets/icons/log-out.svg'
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { ApolloConsumer } from '@apollo/client';
import { Navigate } from 'react-router-dom';

export default function Topbar({callback}) {

  const handleLogout = () => {
    // Callback to reset token state in App.js
    callback({token: ''});
    // Not sure if the below code is working as expected
    <ApolloConsumer>
      {client => {
        client.clearStore().then(() => {
          client.resetStore()
        });
      }}
    </ApolloConsumer>
	};
  
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className="topLeft">
          <span className="heading">EWB Nappy Washing Admin Portal</span>
        </div>
        <div className="topRight">
          <span className="topbarRHSWrapper">
            <span className="profileWrapper">
              <FaRegUserCircle size="30px"/>
              <span className="profile">John Doe</span>
              <button className='logoutBtn' onClick={() => handleLogout()}>Log Out <BiLogOut size="20px"/></button>
            </span>
            <img width={60} height={60} src={mamaLeafLogo} className="mamaLeafLogo" alt="mamaLeafLogo"/>
          </span>
        </div>
      </div>
    </div>
  )
}
