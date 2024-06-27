import React, { useState } from "react";
import Styles from './BoatInfo.module.css'; 
// import PhotoUploadCard from './PhotoUploadCard';
// import BoatSpecifications from './BoatSpecifications';
// import PricingForm from './PricingForm';

const data = ({data ,handleChange, setData}) => {

  
  return (
    <div className={Styles["boat-info-container"]}>
      <h1>Boat Information</h1>
      <div className={Styles["boat-info-form"]}>
        <div className={Styles["form-group"]}>
          <label htmlFor="boatName">Boat Name:</label>
          <input
            type="text"
            id="boatName"
            name="boatName"
            value={data.boatName}
            onChange={handleChange}
          />
        </div>
        <div className={Styles["form-group"]}>
          <label htmlFor="boatId">Boat ID:</label>
          <input
            type="text"
            id="boatId"
            name="boatId"
            value={data.boatId}
            onChange={handleChange}
          />
        </div>
        <div className={Styles["form-group"]}>
          <label htmlFor="boatCategory">Boat Category:</label>
          <select
            id="boatCategory"
            name="boatCategory"
            value={data.boatCategory}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="sailboat">Sailboat</option>
            <option value="motorboat">Motorboat</option>
            <option value="yacht">Yacht</option>
            <option value="kayak">Kayak</option>
          </select>
        </div>
        <div className={Styles["form-group"]}>
          <label htmlFor="boatLocation">Boat Location:</label>
          <input
            type="text"
            id="boatLocation"
            name="boatLocation"
            value={data.boatLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className={Styles["form-group"]}>
          <label htmlFor="boatDescription">Boat Description:</label>
          <textarea
            id="boatDescription"
            name="boatDescription"
            value={data.boatDescription}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        {/* <PhotoUploadCard></PhotoUploadCard>
        <BoatSpecifications></BoatSpecifications>
        <PricingForm></PricingForm> */}
        {/* <button type="submit" className={Styles["submit-button"]}>Submit</button> */}
      </div>
    </div>
  );
};

export default data;
