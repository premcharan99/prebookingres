import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const styles = {
    navbar: {
      backgroundColor: 'white',
      padding: '16px 0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      color: '#E23744',
      fontSize: '28px',
      fontWeight: 'bold',
      textDecoration: 'none'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    },
    navLink: {
      textDecoration: 'none',
      color: '#1C1C1C',
      fontSize: '16px',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'background-color 0.2s'
    },
    activeLink: {
      backgroundColor: '#ffedef',
      color: '#E23744'
    },
    userMenu: {
      position: 'relative'
    },
    userButton: {
      backgroundColor: 'transparent',
      border: '1px solid #E23744',
      borderRadius: '8px',
      padding: '8px 16px',
      color: '#E23744',
      cursor: 'pointer',
      fontSize: '16px'
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: 'white',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      padding: '8px 0',
      marginTop: '8px',
      minWidth: '200px'
    },
    dropdownItem: {
      padding: '12px 16px',
      color: '#1C1C1C',
      textDecoration: 'none',
      display: 'block',
      transition: 'background-color 0.2s',
      cursor: 'pointer'
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          Spot At
        </Link>
        <div style={styles.nav}>
          <Link 
            to="/" 
            style={{
              ...styles.navLink,
              ...(location.pathname === '/' ? styles.activeLink : {})
            }}
          >
            Home
          </Link>
          <div style={styles.userMenu}>
            <button 
              style={styles.userButton}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              Account
            </button>
            {isUserMenuOpen && (
              <div style={styles.dropdown}>
                <Link to="/admin/login" style={styles.dropdownItem}>
                  Admin Login
                </Link>
                <div 
                  style={styles.dropdownItem}
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  See History
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;