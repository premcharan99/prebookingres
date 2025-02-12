import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import SeatSelection from './components/SeatSelection';
import MenuSelection from './components/MenuSelection';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const appStyles = {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  };

  return (
    <Router>
      <div style={appStyles}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:location" element={<RestaurantList />} />
          <Route path="/seat-selection/:restaurantId" element={<SeatSelection />} />
          <Route path="/menu-selection/:restaurantId" element={<MenuSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;