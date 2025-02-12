import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Info, Wind, Sun, Users } from 'lucide-react';

const RestaurantSeating = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [showTooltip, setShowTooltip] = useState(null);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px'
    },
    header: {
      marginBottom: '32px'
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    subtitle: {
      color: '#666',
      marginBottom: '24px'
    },
    timeSection: {
      marginBottom: '32px'
    },
    timeTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '16px'
    },
    timeSlotContainer: {
      display: 'flex',
      gap: '8px',
      overflowX: 'auto',
      paddingBottom: '16px'
    },
    timeSlot: {
      padding: '8px 16px',
      borderRadius: '8px',
      border: '1px solid #2563eb',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap'
    },
    timeSlotSelected: {
      backgroundColor: '#2563eb',
      color: 'white'
    },
    floorPlanContainer: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      gap: '24px',
      marginBottom: '32px'
    },
    floorPlan: {
      border: '4px solid #e5e7eb',
      padding: '32px',
      borderRadius: '8px',
      backgroundColor: 'white'
    },
    seatingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px'
    },
    seatContainer: {
      position: 'relative'
    },
    seatButton: {
      width: '100%',
      aspectRatio: '1',
      borderRadius: '8px',
      border: '2px solid',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative'
    },
    seatSelected: {
      boxShadow: '0 0 0 2px #2563eb'
    },
    seatIcon: {
      marginBottom: '4px'
    },
    seatLabel: {
      fontSize: '14px',
      fontWeight: '500'
    },
    seatCapacity: {
      fontSize: '12px'
    },
    featureIcon: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      width: '16px',
      height: '16px'
    },
    tooltip: {
      position: 'absolute',
      zIndex: 10,
      width: '200px',
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '12px',
      transform: 'translateY(-100%) translateX(-25%)'
    },
    tooltipTitle: {
      fontWeight: '600',
      marginBottom: '8px'
    },
    tooltipList: {
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    tooltipItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    legend: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '16px',
      border: '1px solid #e5e7eb'
    },
    legendTitle: {
      fontWeight: '600',
      marginBottom: '12px'
    },
    legendList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px'
    },
    legendColor: {
      width: '16px',
      height: '16px',
      borderRadius: '4px'
    },
    summary: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '16px',
      border: '1px solid #e5e7eb'
    },
    summaryTitle: {
      fontWeight: '600',
      marginBottom: '12px'
    },
    summaryContent: {
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    continueButton: {
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    },
    continueButtonEnabled: {
      backgroundColor: '#2563eb',
      color: 'white'
    },
    continueButtonDisabled: {
      backgroundColor: '#e5e7eb',
      color: '#666',
      cursor: 'not-allowed'
    }
  };

  // Define seat types and their features
  const seatTypes = {
    WINDOW: { name: 'window', color: '#dbeafe', border: '#2563eb' },
    AC: { name: 'ac', color: '#dcfce7', border: '#16a34a' },
    CORNER: { name: 'corner', color: '#f3e8ff', border: '#9333ea' },
    BOOTH: { name: 'booth', color: '#fef3c7', border: '#d97706' },
    REGULAR: { name: 'regular', color: '#f3f4f6', border: '#6b7280' }
  };

  const seatingLayout = [
    { id: 1, type: seatTypes.WINDOW, capacity: 4, features: ['Scenic city view', 'Natural lighting', 'Window side'] },
    { id: 2, type: seatTypes.WINDOW, capacity: 4, features: ['Garden view', 'Natural lighting', 'Window side'] },
    { id: 3, type: seatTypes.AC, capacity: 2, features: ['AC overhead', 'Intimate setting'] },
    { id: 4, type: seatTypes.BOOTH, capacity: 6, features: ['Private booth', 'AC nearby', 'Premium space'] },
    { id: 5, type: seatTypes.CORNER, capacity: 4, features: ['Private corner', 'Quiet area'] },
    { id: 6, type: seatTypes.REGULAR, capacity: 2, features: ['Central location'] }
  ];

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
  ];

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleContinue = () => {
    if (selectedSeats.length > 0 && selectedTime) {
      navigate(`/menu-selection/${restaurantId}`, {
        state: { selectedSeats, selectedTime }
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Restaurant Floor Plan</h1>
        <p style={styles.subtitle}>Select your preferred seating arrangement</p>
      </div>

      <div style={styles.timeSection}>
        <h2 style={styles.timeTitle}>Choose Time Slot</h2>
        <div style={styles.timeSlotContainer}>
          {timeSlots.map((time) => (
            <button
              key={time}
              style={{
                ...styles.timeSlot,
                ...(selectedTime === time && styles.timeSlotSelected)
              }}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.floorPlanContainer}>
        <div style={styles.floorPlan}>
          <div style={styles.seatingGrid}>
            {seatingLayout.map((seat) => (
              <div
                key={seat.id}
                style={styles.seatContainer}
                onMouseEnter={() => setShowTooltip(seat.id)}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <button
                  style={{
                    ...styles.seatButton,
                    backgroundColor: seat.type.color,
                    borderColor: seat.type.border,
                    ...(selectedSeats.includes(seat.id) && styles.seatSelected)
                  }}
                  onClick={() => handleSeatClick(seat.id)}
                >
                  <Users style={styles.seatIcon} />
                  <span style={styles.seatLabel}>Table {seat.id}</span>
                  <span style={styles.seatCapacity}>{seat.capacity} people</span>
                  
                  {seat.type === seatTypes.WINDOW && (
                    <Sun style={styles.featureIcon} />
                  )}
                  {seat.type === seatTypes.AC && (
                    <Wind style={styles.featureIcon} />
                  )}
                </button>

                {showTooltip === seat.id && (
                  <div style={styles.tooltip}>
                    <h3 style={styles.tooltipTitle}>Table {seat.id}</h3>
                    <ul style={styles.tooltipList}>
                      {seat.features.map((feature, idx) => (
                        <li key={idx} style={styles.tooltipItem}>
                          <Info size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.sidebar}>
          <div style={styles.legend}>
            <h3 style={styles.legendTitle}>Seating Types</h3>
            <div style={styles.legendList}>
              {Object.entries(seatTypes).map(([key, value]) => (
                <div key={key} style={styles.legendItem}>
                  <div
                    style={{
                      ...styles.legendColor,
                      backgroundColor: value.color,
                      border: `1px solid ${value.border}`
                    }}
                  />
                  <span>{key.charAt(0) + key.slice(1).toLowerCase()}</span>
                </div>
              ))}
            </div>
          </div>

          {selectedSeats.length > 0 && selectedTime && (
            <div style={styles.summary}>
              <h3 style={styles.summaryTitle}>Your Selection</h3>
              <div style={styles.summaryContent}>
                <p>Tables: {selectedSeats.join(', ')}</p>
                <p>Time: {selectedTime}</p>
                <p>Total Capacity: {
                  selectedSeats.reduce((acc, seatId) => 
                    acc + seatingLayout.find(s => s.id === seatId).capacity, 0
                  )} people
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        style={{
          ...styles.continueButton,
          ...(selectedSeats.length && selectedTime
            ? styles.continueButtonEnabled
            : styles.continueButtonDisabled)
        }}
        onClick={handleContinue}
        disabled={!selectedSeats.length || !selectedTime}
      >
        Continue to Menu Selection
      </button>
    </div>
  );
};

export default RestaurantSeating;