import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RestaurantList = () => {
  const { location } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    },
    header: {
      marginBottom: '32px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    filterContainer: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
      overflowX: 'auto',
      padding: '8px 0'
    },
    filterButton: {
      padding: '8px 16px',
      borderRadius: '20px',
      border: '1px solid #E23744',
      backgroundColor: 'white',
      color: '#E23744',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    },
    activeFilter: {
      backgroundColor: '#E23744',
      color: 'white'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '24px'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'transform 0.2s'
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    content: {
      padding: '16px'
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    cuisine: {
      color: '#666666',
      marginBottom: '8px'
    },
    info: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '12px'
    },
    rating: {
      backgroundColor: '#48c479',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '14px'
    },
    time: {
      color: '#666666',
      fontSize: '14px'
    }
  };

  const filters = [
    'all',
    'rating 4.0+',
    'pure veg',
    'non-veg',
    'cost: low to high',
    'cost: high to low'
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Biryani Blues',
      cuisine: 'North Indian, Biryani',
      image: 'https://via.placeholder.com/400x300',
      rating: 4.2,
      deliveryTime: '30-35 min',
      priceForTwo: '₹400 for two'
    },
    {
      id: 2,
      name: 'Paradise',
      cuisine: 'South Indian, Chinese',
      image: 'https://via.placeholder.com/400x300',
      rating: 4.5,
      deliveryTime: '25-30 min',
      priceForTwo: '₹300 for two'
    },
    // Add more restaurants...
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Restaurants in {location}</h1>
        <div style={styles.filterContainer}>
          {filters.map((f) => (
            <button
              key={f}
              style={{
                ...styles.filterButton,
                ...(filter === f ? styles.activeFilter : {})
              }}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.grid}>
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            style={styles.card}
            onClick={() => navigate(`/seat-selection/${restaurant.id}`)}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              style={styles.image}
            />
            <div style={styles.content}>
              <h3 style={styles.name}>{restaurant.name}</h3>
              <p style={styles.cuisine}>{restaurant.cuisine}</p>
              <div style={styles.info}>
                <span style={styles.rating}>★ {restaurant.rating}</span>
                <span style={styles.time}>{restaurant.deliveryTime}</span>
                <span style={styles.time}>{restaurant.priceForTwo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;