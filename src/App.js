import Topbar from './components/topbar/Topbar.jsx'
import './app.css'
import Sidebar from './components/sidebar/Sidebar.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Bookings from './pages/bookings/Bookings.jsx';
import Reports from './pages/reports/Reports.jsx';
import Feedback from './pages/feedback/Feedback.jsx';
import Settings from './pages/settings/Settings.jsx';
import ErrorPage from './pages/errorpage/ErrorPage.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>  
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/bookings" element={<Bookings />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="/feedback" element={<Feedback />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
