import React from 'react'
import "./topbar.css"
import mamaLeafLogo from "./../../assets/images/mammaslaeflogo.png"
import { FaRegUserCircle } from "react-icons/fa";

export default function topbar() {
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
            </span>
            <img src={mamaLeafLogo} className="mamaLeafLogo" alt="mamaLeafLogo"/>
          </span>
        </div>
      </div>
    </div>
  )
}
