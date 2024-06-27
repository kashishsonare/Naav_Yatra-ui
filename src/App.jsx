import React, { cloneElement, useState } from "react";
import './App.css';
import axios from 'axios';
import Header from "./Components/Header";
import BoatInfo from './Components/BoatInfo';
import PhotoUploadCard from './Components/PhotoUploadCard';
import BoatSpecifications from './Components/BoatSpecifications';
import PricingForm from './Components/PricingForm';
import Footer from "./Components/Footer";

const emptyData = {
  boatName: "",
  boatId: "",
  boatCategory: "",
  boatLocation: "",
  boatDescription: "",
  images: [""],
  averageSpeed: "",
  topspeed: "",
  torque: "",
  fuelType: "",
  totalseats: "",
  cabin: "",
  weightCapacity: "",
  amenities: [""],
  price: "",
  rentalTimeHours: [{
    hours: "",
    price: "",
  }],
  dayweekTime: [{
    day: "",
    time: "",
    to: "",
  }]
}

function App() {
  const [data, setData] = useState(emptyData)
  const handleSubmit = async (e) => {
    console.log("submit")
    e.preventDefault();
    const arrayValue = ["rentalTimeHours", "dayweekTime"]
    const formData = new FormData()
    for (const keyU in data) {
      if (data.hasOwnProperty(keyU)) {
        if (arrayValue.includes(keyU)) {
          console.log(keyU, "2")
          for (let i = 0; i < data[keyU].length - 1; i++) {
            console.log(keyU)
            for (const [key, value] of Object.entries(data[keyU][i])) {
              // console.log(`${keyU}[${i}][${keyU}]`, '///////////////')
              formData.append(`${keyU}[${i}][${key}]`, value)
              // formData.append(`${keyU}[${i}]`, data[keyU][i])
            }
          }
        }
        else {
          formData.append(keyU, data[keyU])
        }
      }
    }
    const res = await axios.post("http://localhost:5000/api/boats", formData).then(response => console.log(response)).catch(err => console.log(err))
     console.log(res)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  console.log(data)

  
  return (
    <form onSubmit={handleSubmit}>
      <Header />
      <BoatInfo handleChange={handleChange} data={data} setData={setData} />
      <PhotoUploadCard handleChange={handleChange} data={data} setData={setData} />
      <BoatSpecifications handleChange={handleChange} data={data} setData={setData} />
      <PricingForm handleChange={handleChange} data={data} setData={setData} handleSubmit={handleSubmit} />
      <Footer></Footer>
    </form>
  )
}

export default App;
