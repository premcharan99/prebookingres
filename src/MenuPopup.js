import React, { useState } from 'react';
import './MenuPopup.css';

const MenuPopup = ({ onClose }) => {
  const [menuItems, setMenuItems] = useState({
    curry: 0,
    roti: 0,
    curd: 0,
    waterBottle: 0,
  });

  const handleAddItem = (item) => {
    setMenuItems((prev) => ({
      ...prev,
      [item]: prev[item] + 1,
    }));
  };

  const totalCost = Object.values(menuItems).reduce((acc, count) => acc + count * 100, 0); // assume each item costs 100
  const advancePayment = totalCost / 2;

  return (
    <div className="menu-popup">
      <h2>Select Your Menu</h2>
      <div className="menu-item" onClick={() => handleAddItem('curry')}>Curry</div>
      <div className="menu-item" onClick={() => handleAddItem('roti')}>Roti</div>
      <div className="menu-item" onClick={() => handleAddItem('curd')}>Curd</div>
      <div className="menu-item" onClick={() => handleAddItem('waterBottle')}>Water Bottle</div>
      
      <div className="cost-summary">
        <p>Total Cost: ₹{totalCost}</p>
        <p>Advance Payment (50%): ₹{advancePayment}</p>
      </div>

      <button className="close-btn" onClick={onClose}>Confirm and Close</button>
    </div>
  );
};

export default MenuPopup;
