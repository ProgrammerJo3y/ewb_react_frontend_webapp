import './sidebar.css'
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/dashboard">Dashboard</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/bookings">Bookings</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/reports">Reports</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/feedback">Feedback</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "sidebarActive" : "sidebarInactive")} to="/settings">Settings</NavLink>
        </div>
        <div className="footer">&copy; Mamma's Leaf</div>
      </div>
    </div>
  )
}
