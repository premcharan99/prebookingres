import React, { useEffect } from 'react';
import './stat.css';

const stat = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Check if element is in viewport
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('animated');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter submission logic here
  };

  return (
    <>
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
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default stat;