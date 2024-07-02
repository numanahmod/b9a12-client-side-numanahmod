
import {  useLoaderData } from "react-router-dom";
// booking form 
// src/BookingForm.js
import axios from 'axios';
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Swal from 'sweetalert2';




import TourGuides from "./TourGuides";
import { AuthContext } from "../../providers/AuthProvider";


const PackageDetailsPage = () => {
  const items = useLoaderData();
  
  const {tour_type, trip_title, about, price,  tour_plan,images } = items;
 //booking form work 
 const { user } = useContext(AuthContext)
  

  const [bookingDate, setBookingDate] = useState(new Date())

  const handleBook = async e => {
    e.preventDefault()
    const form = e.target
    const image_url = form.image.value;

    const package_name = form.package_name.value
    const tourist_name = user?.displayName
    const email = form.email.value
 
    const booking_date = bookingDate
    const tourist_guide_name = form.tourist_guide_name.value
    const price = parseFloat(form.price.value)
   
   
  
    const bookingData = {
      image_url,
      package_name,

      booking_date,
      tourist_guide_name,
      tourist_name,
      price,
   

      email,

 
    }
    console.log(bookingData);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/myBookings`,
        bookingData
      )
      console.log(data)
      if (data.insertedId) {
        Swal.fire({
            title: 'Success!',
            text: 'Booked successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        
    }
     
    } catch (err) {
      console.log(err)
    }
  }
  

    return (
        <div className=" pt-20">
           <section className="py-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
           
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={images[0]} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={images[1]} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={images[2]} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={images[3]} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={images[4]}/>
		
	</div>
</section> 
<p className="text-center"> <span className=" text-amber-400 font-bold text-xl ">About: </span>  <span className=""> {about}</span>      </p>

<div>
	<p className=" text-3xl text-lime-600 font-bold text-center">Tour Plane</p>
	<div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
					
  <div className="collapse-title text-xl font-medium text-center"> <button className="btn text-center bg-lime-400"> Day 1 </button> <br />
  
  </div>
  <div className="collapse-content text-xl font-medium text-center"> 
  {tour_plan.day_one}
  </div>
</div>   
                </div>
	<div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
					
  <div className="collapse-title text-xl font-medium text-center"> <button className="btn text-center bg-lime-400"> Day 2 </button> <br />
  
  </div>
  <div className="collapse-content text-xl font-medium text-center"> 
  {tour_plan.day_two}
  </div>
</div>   
                </div>
	<div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
					
  <div className="collapse-title text-xl font-medium text-center"> <button className="btn text-center bg-lime-400"> Day 3 </button> <br />
  
  </div>
  <div className="collapse-content text-xl font-medium text-center"> 
  {tour_plan.day_three}
  </div>
</div>   
                </div>
	
     <div className="">
      <TourGuides></TourGuides>
     </div>
   <div>
   
   <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
    <section className=' p-2 lg:w-[600px] md:p-6 mx-auto bg-purple-300 rounded-md shadow-md '>
      <h2 className='text-center text-lg font-semibold text-gray-700 capitalize '>
      Booking Form
      </h2>

      <form onSubmit={handleBook}>
        <div className=' gap-6 mt-4 sm:grid-cols-2'>
          <div>
          <div>
          <label className='text-gray-700 ' htmlFor='package_name'>
              Name of the package:
            </label>
            <input
            required
            disabled
            defaultValue={tour_type}
              id='package_name'
              name='package_name'
              placeholder='Name of the package'
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          <label htmlFor="">Tourist Name: </label>
      <input type="text" name="tourist_name" id="" 
      required
      className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' disabled defaultValue={user?.displayName} />
            <label className='text-gray-700 ' htmlFor='emailAddress'>
            Tourist Email:
            </label>
            <input
              id='emailAddress'
              required
              type='email'
              name='email'
              disabled
              defaultValue={user?.email}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>
          <label className="block mb-2 dark:text-white">
          Tourist Image URL: 
            </label>
            <input required
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              type="text"
              placeholder="Picture Url "
              id="name"
              name="image"
              disabled
              defaultValue={user?.photoURL}
            />

            
          </div>
          </div>
         
            <div className='flex flex-col gap-2 '>
            <label className='text-gray-700 '>
            Tour Guide Name:
            </label>
            <select
              name='tourist_guide_name'
              id=''
              className='border p-2 rounded-md'
            >
              <option value='Mr. Rahman'>Mr. Rahman</option>
              <option value='Mr. Hasan'>Mr. Hasan</option>
              <option value='Ahmed Khan'>Ahmed Khan</option>
              <option value='Mr. Imran'>Mr. Imran</option>
            </select>

         
          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700'>Tour Date:</label>

            
            <DatePicker
              className='border p-2 rounded-md'
              selected={bookingDate}
              onChange={date => setBookingDate(date)}
            />
          </div>
          

          
          <div>
            <label className='text-gray-700 ' >
            Price:
            </label>
            <input
            required
              id='price'
              name='price'
              type='number'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              defaultValue={price}
              disabled
            />
          </div>

          
          
        </div>
       
        <div className='flex justify-center mt-6'>
          <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-yellow-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
            Book a Package 
          </button>
        </div>
      </form>
    </section>
  </div>
   </div>
</div>

        </div>
    );
};

export default PackageDetailsPage;