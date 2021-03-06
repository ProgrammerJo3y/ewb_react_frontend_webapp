import React, { useState } from 'react';

import Topbar from './components/topbar/Topbar.jsx'
import './app.css'
import Sidebar from './components/sidebar/Sidebar.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Bookings from './pages/bookings/Bookings.jsx';
import Reports from './pages/reports/Reports.jsx';
import Users from './pages/users/Users.jsx';
import Settings from './pages/settings/Settings.jsx';
import ErrorPage from './pages/errorpage/ErrorPage.jsx'
import Login from './pages/login/Login.jsx'
import { Routes, Route } from 'react-router-dom';
// import { useApolloClient } from '@apollo/client';

function App() {
  const [token, setToken] = useState();
  // const client = useApolloClient();

  async function handleLoginCallback (callbackData) {
    await setToken(callbackData.token)
    localStorage.setItem('token', `Bearer ${callbackData.token}`)
  }

  if (!token) {
    // reset token to null to clear the authorisation header --> refer to index.js
    localStorage.setItem('token', null);
    return <Login callback={handleLoginCallback} />
  }

  async function handleLogoutCallback (callbackData) {
    await setToken(callbackData.token)
    localStorage.setItem('token', ``);
    // Might be able to also clear and reset client storage here
  }

  return (
    <div className="App">
      <Topbar 
      callback={handleLogoutCallback}
      />
      <div className="container">
        <Sidebar/>  
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/bookings" element={<Bookings />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
