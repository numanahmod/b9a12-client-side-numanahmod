// src/BookingForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const BookingForm = () => {
  // const [ourPackage, setOurPackage] = useState('');
  // const [touristName, setTouristName] = useState('John Doe'); // Example logged-in user
  // const [touristEmail, setTouristEmail] = useState('john.doe@example.com'); // Example logged-in user
  // const [touristImage, setTouristImage] = useState('https://example.com/john-doe.jpg'); // Example logged-in user image
  // const [price, setPrice] = useState('');
  // const [tourDate, setTourDate] = useState(new Date());
  // const [tourGuide, setTourGuide] = useState('');

  // const guideOptions = [
  //   { value: 'guide1', label: 'Guide 1' },
  //   { value: 'guide2', label: 'Guide 2' },
  //   { value: 'guide3', label: 'Guide 3' },
  // ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const bookingData = {
  //     ourPackage,
  //     touristName,
  //     touristEmail,
  //     touristImage,
  //     price,
  //     tourDate,
  //     tourGuide,
  //   };
  //   console.log('Booking Data:', bookingData);
  //   // Handle form submission logic here
  // };

  return (
    <form 
    // onSubmit={
    //   handleSubmit}
    className=' border-2 border-orange-400 p-8'
    >
      <h1 className=' text-center text-3xl text-lime-500 font-bold'>Booking Form</h1>
      <div>
        <label>Name of the package:</label>
        <br />
        <input
        className=' bg-gray-200 p-2 font-semibold'
          type="text"
          // value={ourPackage}
          // onChange={(e) => setOurPackage(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tourist Name:</label>
        <br />
        <input 
        className=' bg-gray-200 p-2 font-semibold' type="text"
        //  value={touristName}
          readOnly />
      </div>
      <div>
        <label>Tourist Email:</label>
        <br />
        <input type="email"
        className=' bg-gray-200 p-2 font-semibold'
        //  value={touristEmail}
          readOnly />
      </div>
      <div>
        <label>Tourist Image URL:</label>
        <br />
        <input type="text" 
        className=' bg-gray-200 p-2 font-semibold'
        // value={touristImage}
         readOnly />
      </div>
      <div>
        <label>Price:</label>
        <br />
                <input
          type="number"
          className=' bg-gray-200 p-2 font-semibold'
          // value={price}
          // onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tour Date:</label>
        <br />
        <DatePicker
          // selected={tourDate}
          // onChange={(date) => setTourDate(date)}
          required
         className=' bg-gray-200 p-2 font-semibold'
        />
      </div>
      <div>
        <label>Tour Guide Name:</label>
        <Select
        className=' bg-gray-200 p-2 font-semibold'
          // options={guideOptions}
          // value={guideOptions.find(option => option.value === tourGuide)}
          // onChange={(selectedOption) => setTourGuide(selectedOption.value)}
          required
        />
      </div>
      <br />
      <div>
        <Link to={`/myBookingList`}><button type="submit" className='btn btn-secondary'>Book Now</button></Link>
      </div>
    </form>
  );
};

export default BookingForm;
