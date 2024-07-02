import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

import useAxiosPublic from "../../hooks/useAxiosPublic";


const AssignedTour = () => {
    const axiosPublic = useAxiosPublic();
    // const axiosSecure = useAxiosSecure();

    // const {data: users = [], refetch} = useQuery({
    //     queryKey:['users'],
    //     queryFn: async () =>{
    //       const res = await axiosSecure.get('/users');
    //       return res.data;
    //     }
    // })
   

    const {data: bookings = [], refetch} = useQuery({
        queryKey:['allBookings'],
        queryFn: async () =>{
          const res = await axiosPublic.get('/allBookings');
          return res.data;
        }
    })

    // const handleMakeAdmin = user => {
    //     axiosSecure.patch(`/users/admin/${user._id}`)
    //     .then(res => {
    //         console.log(res.data);
    //         if( res.data.modifiedCount > 0){
    //             refetch();
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: `${user.name} is Admin now!`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         }
    //     })
    // }

    const handleDeleteAUser = async id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          axiosSecure.delete(`/users/${id}`)
                .then(res =>{
                   if (res.data.deletedCount > 0) {
                  refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    
                   }
         
                })
             
            }
          });
    
       
    }
    return (
        <div>
    <div className="flex justify-evenly my-8">
   
    <h2 className=" text-2xl text-center ">Total Bookings: {bookings.length} </h2>
    </div>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Package Name</th>
        <th>T. Name</th>
        <th>Tour date</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        bookings.map((booking, index) =>  <tr key={booking._id}> 
            <th>{index + 1}</th>
            <td>{booking.package_name} </td>
            <td>{booking.tourist_name}</td>
            {/* <td>
               { booking.role === 'admin' ? 'Guide' :<button
                onClick={() => handleMakeAdmin(user)}
                className="btn btn-lg bg-orange-500"
                >
                  Make Guide

                </button>}
            </td> */}
            {/* <td>
               { booking.role === 'admin' ? 'admin' :<button
                onClick={() => handleMakeAdmin(user)}
                className="btn btn-lg bg-orange-500"
                >
                    <FaUsers className=" text-white text-2xl"/>

                </button>}
            </td> */}
            
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(booking.booking_date).toLocaleDateString()}
                      </td>
            <td>{booking.price}</td>
            <td><div className='flex items-center gap-x-6'>
                          <button
                            onClick={() => handleDeleteAUser(booking._id)}
                            className=' btn btn-secondary bg-orange-300 transition-colors duration-200   hover:bg-red-500 focus:outline-none'
                          >
                            Accept
                          </button>

                         
                        </div></td>
            <td><div className='flex items-center gap-x-6'>
                          <button
                            onClick={() => handleDeleteAUser(booking._id)}
                            className=' btn btn-secondary bg-gray-500 transition-colors duration-200   hover:bg-red-500 focus:outline-none'
                          >
                            Reject
                          </button>

                         
                        </div></td>
          </tr>)
     }
     
      
    </tbody>
  </table>
</div>
        
            
        </div>
    );
};

export default AssignedTour;