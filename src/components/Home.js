import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    hero: {
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://via.placeholder.com/1920x600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    subtitle: {
      fontSize: '18px',
      marginBottom: '32px',
      maxWidth: '600px'
    },
    searchContainer: {
      width: '100%',
      maxWidth: '600px',
      position: 'relative'
    },
    searchInput: {
      width: '100%',
      padding: '16px',
      fontSize: '16px',
      borderRadius: '8px',
      border: 'none',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    locationGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px',
      padding: '40px 0'
    },
    locationCard: {
      borderRadius: '12px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      backgroundColor: 'white'
    },
    locationImage: {
      width: '100%',
      height: '180px',
      objectFit: 'cover'
    },
    locationInfo: {
      padding: '16px'
    },
    locationName: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    restaurantCount: {
      color: '#666666'
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '40px 0 24px'
    }
  };

  const popularLocations = [
    {
      id: 1,
      name: 'Vijayawada',
      image: 'https://via.placeholder.com/400x300',
      restaurantCount: 248
    },
    {
      id: 2,
      name: 'Guntur',
      image: 'https://via.placeholder.com/400x300',
      restaurantCount: 186
    },
    {
      id: 3,
      name: 'Hyderabad',
      image: 'https://via.placeholder.com/400x300',
      restaurantCount: 892
    },
    {
      id: 4,
      name: 'Rajahmundry',
      image: 'https://via.placeholder.com/400x300',
      restaurantCount: 156
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/restaurants/${searchQuery}`);
    }
  };

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.title}>Discover the best food & drinks</h1>
        <p style={styles.subtitle}>
          Order food from favourite restaurants near you
        </p>
        <form style={styles.searchContainer} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </form>
      </div>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Popular Cities</h2>
        <div style={styles.locationGrid}>
          {popularLocations.map((location) => (
            <div
              key={location.id}
              style={styles.locationCard}
              onClick={() => navigate(`/restaurants/${location.name}`)}
            >
              <img
                src={location.image}
                alt={location.name}
                style={styles.locationImage}
              />
              <div style={styles.locationInfo}>
                <h3 style={styles.locationName}>{location.name}</h3>
                <p style={styles.restaurantCount}>
                  {location.restaurantCount} restaurants
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;