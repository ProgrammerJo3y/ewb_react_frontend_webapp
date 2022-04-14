import './sidebar.css'
import {Link} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <Link className="sidebarTitle" to="/dashboard">Dashboard</Link>
          <Link className="sidebarTitle" to="/bookings">Bookings</Link>
          <Link className="sidebarTitle" to="/reports">Reports</Link>
          <Link className="sidebarTitle" to="/feedback">Feedback</Link>
          <Link className="sidebarTitle" to="/settings">Settings</Link>
        </div>
        <div className="footer">&copy; Mamma's Leaf</div>
      </div>
    </div>
  )
}
