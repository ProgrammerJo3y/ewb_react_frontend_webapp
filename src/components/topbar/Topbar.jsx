import React from 'react';
import "./topbar.css";
import { useState } from 'react'
import mamaLeafLogo from "./../../assets/images/mammaslaeflogo.png"
import logOutIcon from '../../assets/icons/log-out.svg'
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { ApolloConsumer } from '@apollo/client';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { get_admin_user } from '../../graphql/queries';
import jwt_decode from 'jwt-decode';


export default function Topbar({callback}) {
  const token = localStorage.getItem('token').replace('Bearer ' , '');
const decoded = jwt_decode(token); 

  const result= useQuery(get_admin_user, {
    variables: {
      userId:decoded.id
    }
  });
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
              <span className="profile">{result?.data?.getAdminUser.name}</span>
              <button className='logoutBtn' onClick={() => handleLogout()}>Log Out <BiLogOut size="20px"/></button>
            </span>
            <img width={60} height={60} src={mamaLeafLogo} className="mamaLeafLogo" alt="mamaLeafLogo"/>
          </span>
        </div>
      </div>
    </div>
  )
}
