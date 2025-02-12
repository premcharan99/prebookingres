import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const MenuSelection = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('recommended');

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: '24px'
    },
    menuSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px'
    },
    categories: {
      display: 'flex',
      gap: '16px',
      overflowX: 'auto',
      padding: '8px 0',
      marginBottom: '24px'
    },
    categoryButton: {
      padding: '8px 16px',
      borderRadius: '20px',
      border: '1px solid #E23744',
      backgroundColor: 'white',
      color: '#E23744',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    },
    activeCategory: {
      backgroundColor: '#E23744',
      color: 'white'
    },
    menuItem: {
      display: 'flex',
      gap: '16px',
      padding: '16px 0',
      borderBottom: '1px solid #eee'
    },
    itemImage: {
      width: '120px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '8px'
    },
    itemDetails: {
      flex: 1
    },
    itemName: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    itemPrice: {
      color: '#666666',
      marginBottom: '8px'
    },
    itemDescription: {
      fontSize: '14px',
      color: '#666666'
    },
    addButton: {
      padding: '8px 24px',
      backgroundColor: 'white',
      border: '1px solid #E23744',
      color: '#E23744',
      borderRadius: '6px',
      cursor: 'pointer'
    },
    cartSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      position: 'sticky',
      top: '24px',
      height: 'fit-content'
    },
    cartTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #eee'
    },
    quantityControl: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    quantityButton: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: '1px solid #E23744',
      backgroundColor: 'white',
      color: '#E23744',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bill: {
      marginTop: '24px',
      padding: '16px 0',
      borderTop: '1px solid #eee'
    },
    billRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px'
    },
    total: {
      fontWeight: 'bold',
      fontSize: '18px'
    },
    checkoutButton: {
      width: '100%',
      padding: '16px',
      backgroundColor: '#E23744',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '16px'
    }
  };

  const menuCategories = [
    'recommended', 'starters', 'main course', 
    'breads', 'rice', 'desserts', 'beverages'
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Butter Chicken',
      price: 320,
      description: 'Tender chicken pieces in rich, creamy tomato gravy',
      category: 'main course',
      image: 'https://via.placeholder.com/120x100',
      veg: false
    },
    {
      id: 2,
      name: 'Paneer Tikka',
      price: 280,
      description: 'Grilled cottage cheese marinated in Indian spices',
      category: 'starters',
      image: 'https://via.placeholder.com/120x100',
      veg: true
    },
    {
      id: 3,
      name: 'Naan',
      price: 40,
      description: 'Traditional Indian bread baked in tandoor',
      category: 'breads',
      image: 'https://via.placeholder.com/120x100',
      veg: true
    }
  ];

  const handleAddToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (itemId, delta) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    navigate('/payment', {
      state: {
        ...location.state,
        cart,
        total: getTotal()
      }
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.menuSection}>
        <div style={styles.categories}>
          {menuCategories.map((category) => (
            <button
              key={category}
              style={{
                ...styles.categoryButton,
                ...(activeCategory === category ? styles.activeCategory : {})
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {menuItems
          .filter(item => item.category === activeCategory)
          .map((item) => (
            <div key={item.id} style={styles.menuItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <div style={styles.itemDetails}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemPrice}>₹{item.price}</p>
                <p style={styles.itemDescription}>{item.description}</p>
              </div>
              <button
                style={styles.addButton}
                onClick={() => handleAddToCart(item)}
              >
                Add
              </button>
            </div>
          ))}
      </div>

      <div style={styles.cartSection}>
        <h2 style={styles.cartTitle}>Your Order</h2>
        {cart.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <div>
              <p>{item.name}</p>
              <p style={styles.itemPrice}>₹{item.price}</p>
            </div>
            <div style={styles.quantityControl}>
              <button
                style={styles.quantityButton}
                onClick={() => handleUpdateQuantity(item.id, -1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                style={styles.quantityButton}
                onClick={() => handleUpdateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div style={styles.bill}>
            <div style={styles.billRow}>
              <span>Subtotal</span>
              <span>₹{getTotal()}</span>
            </div>
            <div style={styles.billRow}>
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>
            <div style={styles.billRow}>
              <span>Platform Fee</span>
              <span>₹20</span>
            </div>
            <div style={{...styles.billRow, ...styles.total}}>
              <span>Total</span>
              <span>₹{getTotal() + 60}</span>
            </div>
            <button 
              style={styles.checkoutButton}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuSelection;