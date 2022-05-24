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
import {gql, useQuery} from '@apollo/client'

function App() {

  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    console.log('APP' + localStorage.getItem('token')),
    <div className="App">
      <Topbar/>
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
