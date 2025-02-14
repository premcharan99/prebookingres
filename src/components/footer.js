import React from 'react';
import { 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-column">
            <a href="/" className="footer-logo">
              DineEase
            </a>
            <p className="footer-brand-description">
              Discover and book the best restaurants in your city. 
              Experience premium dining with our curated selection of 
              top-rated establishments.
            </p>
            <div className="social-media">
              <h4 className="social-media-title">Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <Facebook />
                </a>
                <a href="#" className="social-icon">
                  <Twitter />
                </a>
                <a href="#" className="social-icon">
                  <Instagram />
                </a>
                <a href="#" className="social-icon">
                  <Linkedin />
                </a>
                <a href="#" className="social-icon">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Restaurant Support</a></li>
              <li><a href="#">Partner With Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={20} />
                <span>+1 234 567 890</span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span>support@dineease.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>123 Dining Street, Food City</span>
              </div>
              <div className="contact-item">
                <Clock size={20} />
                <span>Mon - Sun: 24/7</span>
              </div>
            </div>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address" />
              <button type="button">
                Subscribe <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility</a>
          </div>
          <p>&copy; 2025 DineEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;