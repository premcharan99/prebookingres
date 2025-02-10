import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import SeatSelection from './selection';
import MenuPopup from './MenuPopup';
import BookingConfirmation from './BookingConfirmation';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const App = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [location, setLocation] = useState('');
  const [restaurantSearch, setRestaurantSearch] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const restaurants = [
    { name: 'Restaurant A', location: 'New York', cuisine: 'Italian', rating: 4.5, seats: [{ number: '1A', available: true }, { number: '1B', available: false }, { number: '2A', available: true }] },
    { name: 'Restaurant B', location: 'San Francisco', cuisine: 'Japanese', rating: 4.8, seats: [{ number: '1A', available: true }, { number: '2A', available: false }, { number: '2B', available: true }] },
    { name: 'Restaurant C', location: 'Los Angeles', cuisine: 'Mexican', rating: 4.3, seats: [{ number: '1A', available: true }, { number: '1B', available: true }, { number: '2A', available: false }] },
  ];

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(restaurantSearch.toLowerCase()) &&
    restaurant.location.toLowerCase().includes(location.toLowerCase())
  );

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
    setMenuVisible(true);
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="title-section mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Restaurant Seat Booking
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div 
                className="relative cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center gap-2 p-3 border rounded-lg hover:border-blue-400 transition-colors">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="flex-1 text-left">
                    {location || 'Select Location'}
                  </span>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </div>
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border z-10"
                  >
                    {['New York', 'San Francisco', 'Los Angeles'].map((loc) => (
                      <div
                        key={loc}
                        className="p-3 hover:bg-blue-50 cursor-pointer transition-colors"
                        onClick={() => {
                          setLocation(loc);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {loc}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search restaurants..."
                  className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                  value={restaurantSearch}
                  onChange={(e) => setRestaurantSearch(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>

          <AnimatePresence>
            {filteredRestaurants.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4"
              >
                {filteredRestaurants.map((restaurant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg cursor-pointer transition-all transform hover:scale-[1.02] ${
                      selectedRestaurant?.name === restaurant.name
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => handleRestaurantSelect(restaurant)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {restaurant.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                          <MapPin size={16} />
                          <span>{restaurant.location}</span>
                          <span className="text-gray-400">•</span>
                          <span>{restaurant.cuisine}</span>
                        </div>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                        ★ {restaurant.rating}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedRestaurant && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Available Seats for {selectedRestaurant.name}
              </h2>
              <SeatSelection
                seats={selectedRestaurant.seats}
                onSeatSelect={handleSeatSelect}
              />
              {menuVisible && <MenuPopup onClose={handleMenuClose} />}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {bookingConfirmed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <BookingConfirmation />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;