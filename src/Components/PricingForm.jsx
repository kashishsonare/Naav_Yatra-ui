// PricingForm.jsx
import React, { useEffect, useState } from 'react';
import styles from './PricingForm.module.css';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const PricingForm = ({ data, handleChange, setData }) => {
  const [tripPrice, setTripPrice] = useState('');
  const [rentalPrices, setRentalPrices] = useState([{ enterTime: '', price: '' }]);
  const [boatAvailability, setBoatAvailability] = useState([{ day: '', timeFrom: '', timeTo: '' }]);

  const handleRentalPriceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPrices = [...rentalPrices];
    updatedPrices[index][name] = value;
    setRentalPrices(updatedPrices);
  };

  const addRentalPrice = () => {
    setRentalPrices([...rentalPrices, { enterTime: '', price: '' }]);
  };

  const handleAvailabilityChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAvailability = [...boatAvailability];
    updatedAvailability[index][name] = value;
    setBoatAvailability(updatedAvailability);
  };

  const addAvailability = () => {
    setBoatAvailability([...boatAvailability, { day: '', timeFrom: '', timeTo: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Price:', tripPrice);
    console.log('Rental Prices:', rentalPrices);
    console.log('Boat Availability:', boatAvailability);
  };

  useEffect(() => {
    if (rentalPrices.length) {
      setData({ ...data, rentalTimeHours: rentalPrices })
    }
  }, [rentalPrices])


  useEffect(() => {
    if (boatAvailability.length) {
      setData({ ...data, dayweekTime: boatAvailability })
    }
  }, [boatAvailability])
  return (
    <div className={styles['pricing-form']}>
      <h2>Pricing and Availability</h2>
      <div>
        <div className={styles['form-group']}>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            placeholder="Enter Price "
            name="price"
            value={data.tripPrice}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles['form-group']}>
          <h3>Rental Prices</h3>
          {rentalPrices.map((price, index) => (
            <div key={index}>
              <input
                type="text"
                name="enterTime"
                placeholder="Enter Time Per Hour "
                value={price.enterTime}
                onChange={(e) => handleRentalPriceChange(index, e)}
              />
              <input
                type="text"
                name="price"
                placeholder="Price Per Hour"
                value={price.price}
                onChange={(e) => handleRentalPriceChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addRentalPrice}>Add Rental Price</button>
        </div>

        <div className={styles['form-group']}>
          <h3>Boat Availability</h3>
          {boatAvailability.map((availability, index) => (
            <div key={index}>
              <select
                name="day"
                value={availability.day}
                onChange={(e) => handleAvailabilityChange(index, e)}
              >
                <option value="">Select Day</option>
                {daysOfWeek.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <input
                type="time"
                name="timeFrom"
                placeholder="From"
                value={availability.timeFrom}
                onChange={(e) => handleAvailabilityChange(index, e)}
              />
              <input
                type="time"
                name="timeTo"
                placeholder="To"
                value={availability.timeTo}
                onChange={(e) => handleAvailabilityChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addAvailability}>Add Availability</button>
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default PricingForm;
