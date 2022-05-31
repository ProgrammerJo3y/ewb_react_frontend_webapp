import './sidebar.css'
import DashboardIcon from '../../assets/icons/home.svg'
import ReportsIcon from '../../assets/icons/reports.svg'
import FeedbackIcon from '../../assets/icons/feedback.svg'
import BookingsIcon from '../../assets/icons/bookings.svg'
import SettingsIcon from '../../assets/icons/settings.svg'

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")}to="/dashboard">
            <img className="sidebarIcon" src={DashboardIcon} alt="Dashboard logo"/>
            Dashboard
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/bookings">
            <img className="sidebarIcon" src={BookingsIcon} alt="Bookings icon"/>
            Bookings
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/reports">
            <img className="sidebarIcon" src={ReportsIcon} alt="Reports Icon"/>
            Reports
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/users">
            <img className="sidebarIcon" src={FeedbackIcon} alt="Feedback icon"/>
            Users
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/settings">
          <img className="sidebarIcon" src={SettingsIcon} alt="Settings icon"/>
            Settings
          </NavLink>
        </div>
        <div className="footer">Mamma's Leaf</div>
      </div>
    </div>
  )
}
