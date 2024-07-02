import Swal from 'sweetalert2'

// import '../Components/Navbar.css'
import { Fade } from 'react-awesome-reveal';
import { useContext } from 'react';

import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';





const AddPackage = () => {
  const {user } = useContext(AuthContext);
    const handleAddSpot = async e =>{
        e.preventDefault();
        const form = e.target;

        const image_one = form.image_one.value;
        const image_two = form.image_two.value;
        const image_three = form.image_three.value;
        const image_four = form.image_four.value;
        const image_five = form.image_five.value;
        const tour_type = form.tour_type.value;
       
        const trip_title = form.trip_title.value;
        const about = form.about.value;
        const price = form.price.value;
        
        const day_one = form.day_one.value;
        const day_two = form.day_two.value;
        const day_three = form.day_three.value;

        const newAdd = {tour_type, trip_title, about, price,  tour_plan: { day_one, day_two, day_three},images: [image_one, image_two, image_three, image_four, image_five], }
        console.log(newAdd);

        //send data to the server 

        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/package`,
              newAdd
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
       <>
       <Fade>
 

      <div className='lg:m-20 m-2 md:m-5 border-2 bg-pink-100 lg:p-8 p-2'>
      <h2 className='text-center text-xl font-bold'>Add Package </h2>
      <form onSubmit={handleAddSpot} className=''>
          <div className="lg:flex md:flex lg:gap-10 md:gap-5 ">
            <div className="flex-1">
            
            
              <label className="block mb-2 dark:text-white">
                Image Url: <br />
                one 
              </label>
              <input required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Image_one"
                id="name"
                name="image_one"
              />
              <label className="block mb-2 dark:text-white">
              
                two 
              </label>
              <input required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Image_two"
                id="name"
                name="image_two"
              />
              <label className="block mb-2 dark:text-white">
              
                three 
              </label>
              <input required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Image_three"
                id="name"
                name="image_three"
              />
              <label className="block mb-2 dark:text-white">
                
                four
              </label>
              <input required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Image_four"
                id="name"
                name="image_four"
              />
              <label className="block mb-2 dark:text-white">
               
                five 
              </label>
              <input required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Image_five"
                id="name"
                name="image_five"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
               
              >       Tour type
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder=" Tour type"
                id="name"
                name="tour_type"
              />
             
              <label
                className="block mt-4 mb-2 dark:text-white"
               
              >       trip_title 
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="trip_title"
                id="name"
                name="trip_title"
              />
             

             
            </div>
            {/* Right side */}
            <div className="flex-1">
            
           

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
              Price
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="price"
                id="price"
                name="price"
              />
              
             
              <label
                className="block mt-4 mb-2 dark:text-white"
               
              >
                Tour Plane: <br /> day one 
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                
                type="text"
                placeholder="day_one"
                id="name"
                name="day_one"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
               
              >
                day two 
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                
                type="text"
                placeholder="day_two"
                id="name"
                name="day_two"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
               
              >
                day three 
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                
                type="text"
                placeholder="day_three"
                id="name"
                name="day_three"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
               
              >
                Admin Email
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                
                type="email"
               disabled
                id="email"
                name="email"
                defaultValue={user?.email}
              /> 
               <label
                className="block mt-4 mb-2 dark:text-white"
               
              >       About 
              </label>
              <input
              required
                className="w-full h-20 p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="about"
                id="name"
                name="about"
              />
              
            </div>
          </div>

          <input
          required
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#293096] bg-purple-400 duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add"
          />
        </form>
      </div>
      </Fade>
       </>
    );
};

export default AddPackage;