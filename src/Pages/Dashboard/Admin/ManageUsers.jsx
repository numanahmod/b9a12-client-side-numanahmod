import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
          const res = await axiosSecure.get('/users');
          return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if( res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

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
    <h2 className=" text-2xl ">All users</h2>
    <h2 className=" text-2xl ">Total user: {users.length} </h2>
    </div>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user, index) =>  <tr key={user._id}> 
            <th>{index + 1}</th>
            <td> {user.name} </td>
            <td>{user.email}</td>
            <td>
               { user.role === 'admin' ? 'Guide' :<button
                onClick={() => handleMakeAdmin(user)}
                className="btn btn-lg bg-orange-500"
                >
                  Make Guide

                </button>}
            </td>
            <td>
               { user.role === 'admin' ? 'admin' :<button
                onClick={() => handleMakeAdmin(user)}
                className="btn btn-lg bg-orange-500"
                >
                    <FaUsers className=" text-white text-2xl"/>

                </button>}
            </td>
            <td><div className='flex items-center gap-x-6'>
                          <button
                            onClick={() => handleDeleteAUser(user._id)}
                            className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                              />
                            </svg>
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

export default ManageUsers;