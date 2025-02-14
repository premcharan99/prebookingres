import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, Star, MapPin, Utensils } from 'lucide-react';
import Footer from './footer';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedItems((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const popularLocations = [
    {
      id: 1,
      name: 'Hyderabad',
      image: '/hyd.png',
      restaurantCount: 892,
      rating: 4.4,
      cuisine: 'Famous for Biryani'
    },
    {
      id: 2,
      name: 'Vijayawada',
      image: '/vijayawada.png',
      restaurantCount: 248,
      rating: 4.2,
      cuisine: 'Authentic Andhra'
    },
    {
      id: 3,
      name: 'Guntur',
      image: '/guntur.png',
      restaurantCount: 186,
      rating: 4.1,
      cuisine: 'Spicy Cuisine'
    },
    {
      id: 4,
      name: 'Rajahmundry',
      image: '/raj.png',
      restaurantCount: 156,
      rating: 4.0,
      cuisine: 'Coastal Delights'
    }
  ];

  const features = [
    {
      icon: <Clock size={32} />,
      title: "Instant Booking",
      description: "Reserve your table instantly with our real-time booking system"
    },
    {
      icon: <Star size={32} />,
      title: "Premium Selection",
      description: "Curated collection of the finest dining establishments"
    },
    {
      icon: <MapPin size={32} />,
      title: "Smart Location",
      description: "Find perfect dining spots in your preferred location"
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
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">Discover & Reserve Premier Dining</h1>
            <p className="hero-subtitle">
              Experience exceptional cuisine at the finest restaurants. Book your perfect table with just a few clicks.
            </p>
            <form onSubmit={handleSearch} className="search-container">
              <Search className="search-icon" size={24} />
              <input
                type="text"
                placeholder="Search for restaurants or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </form>
          </div>
          <div className="hero-image">
            <img src="/right.png" alt="Dining Experience" />
          </div>
        </div>
      </section>

      {/* Popular Locations Section */}
      <section className="locations-section">
        <div className="container">
          <h2 className="section-title">Explore Popular Cities</h2>
          <p className="section-subtitle">Discover top-rated restaurants in your favorite cities</p>
          <div className="locations-grid">
            {popularLocations.map((location) => (
              <div
                key={location.id}
                className="location-card animate-on-scroll"
                id={`location-${location.id}`}
                onClick={() => navigate(`/restaurants/${location.name}`)}
              >
                <div className="location-image">
                  <img src={location.image} alt={location.name} />
                  <div className="location-rating">
                    {location.rating} ★
                  </div>
                </div>
                <div className="location-info">
                  <h3 className="location-name">{location.name}</h3>
                  <p className="restaurant-count">
                    <Utensils size={16} />
                    {location.restaurantCount} restaurants
                  </p>
                  <p className="cuisine-type">{location.cuisine}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Experience the perfect dining reservation system</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card animate-on-scroll"
                id={`feature-${index}`}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card animate-on-scroll" id="stat-1">
              <h3>1M+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card animate-on-scroll" id="stat-2">
              <h3>500+</h3>
              <p>Partner Restaurants</p>
            </div>
            <div className="stat-card animate-on-scroll" id="stat-3">
              <h3>50+</h3>
              <p>Cities</p>
            </div>
            <div className="stat-card animate-on-scroll" id="stat-4">
              <h3>4.8★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content animate-on-scroll" id="newsletter">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive dining offers and updates</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;