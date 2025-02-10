import React from 'react';
import './selection.css';

const SeatSelection = ({ seats, onSeatSelect }) => {
  return (
    <div className="seat-container">
      {seats.map((seat, index) => (
        <div
          key={index}
          className={`seat ${seat.available ? 'available' : 'unavailable'}`}
          onClick={() => seat.available && onSeatSelect(seat)}
        >
          {seat.number}
        </div>
      ))}
    </div>
  );
};

export default SeatSelection;
