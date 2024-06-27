// BoatSpecifications.jsx

import React, { useState } from 'react';
import styles from './BoatSpecifications.module.css'; 

const BoatSpecifications = ({ handleChange, data, setData }) => {
  const [performance, setPerformance] = useState({
    averageSpeed: '',
    topspeed: '',
    engineTorque: '',
    fuelType: '',
  });

  const [capacity, setCapacity] = useState({
    totalSeats: '',
    cabin: 'yes', 
    weightCapacity: '',
  });

  const [amenities, setAmenities] = useState({
    selectedAmenities: [],
  });

  const availableAmenities = [
    'WiFi',
    'Air Conditioning',
    'Heating',
    'TV',
    'Refrigerator',
    'Microwave',
  ];

  const handlePerformanceChange = (e) => {
    const { name, value } = e.target;
    setPerformance((prev) => ({ ...prev, [name]: value }));
  };

  const handleCapacityChange = (e) => {
    const { name, value } = e.target;
    setCapacity((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenitiesChange = (e) => {
    const { options } = e.target;
    const selectedOptions = [];
    for (const option of options) {
      if (option.selected) {
        selectedOptions.push(option.value);
      }
    }
    
    if (selectedOptions.length <= 4) {
      setAmenities({ selectedAmenities: selectedOptions });
      setData({ ...data, amenities: selectedOptions });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Performance:', performance);
    console.log('Capacity:', capacity);
    console.log('Amenities:', amenities.selectedAmenities);
  };

  return (
    <div className={styles['boat-specifications']}>
      <h2>Boat Specifications</h2>
      <div >
        <div>
          <h3>Performance</h3>
          <div className={styles['form-group']}>
            <label htmlFor="averageSpeed">Average Speed:</label>
            <input
              type="text"
              id="averageSpeed"
              name="averageSpeed"
              value={data.averageSpeed}
              onChange={handleChange}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="topspeed">Top Speed:</label>
            <input
              type="text"
              id="topspeed"
              name="topspeed"
              value={data.topspeed}
              onChange={handleChange}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="torque">Torque:</label>
            <input
              type="text"
              id="torque"
              name="torque"
              value={data.torque}
              onChange={handleChange}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="fuelType">FuelType:</label>
            <input
              type="text"
              id="fuelType"
              name="fuelType"
              value={data.fuelType}
              onChange={handleChange}
            />
          </div>
          {/* Add other performance fields similarly */}

          <h3>Capacity</h3>
          <div className={styles['form-group']}>
            <label htmlFor="totalseats">Total Seats:</label>
            <input
              type="number"
              id="totalseats"
              name="totalseats"
              value={data.totalseats}
              onChange={handleChange}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="cabin">Cabin:</label>
            <input type='text'
              id="cabin"
              name="cabin"
              value={data.cabin}
              onChange={handleChange}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="weightCapacity">Weight Capacity:</label>
            <input
              type="number"
              id="weightCapacity"
              name="weightCapacity"
              value={data.weightCapacity}
              onChange={handleChange}
            />
          </div>

          <h3>Amenities</h3>
          <div className={styles['amenities-container']}>
            <select
              id="amenities"
              name="amenities"
              multiple
              value={amenities.selectedAmenities}
              onChange={handleAmenitiesChange}
            >
              {availableAmenities.map((amenity, index) => (
                <option key={index} value={amenity}>
                  {amenity}
                </option>
              ))}
            </select>
            <div className={styles['selected-amenities']}>
              <h4>Selected Amenities</h4>
              {amenities.selectedAmenities.length === 0 ? (
                <p>No amenities selected.</p>
              ) : (
                <ul>
                  {amenities.selectedAmenities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* <button type="submit" className={styles['submit-button']}>Submit</button> */}
        </div>
      </div>
    </div>
  );
};

export default BoatSpecifications;
