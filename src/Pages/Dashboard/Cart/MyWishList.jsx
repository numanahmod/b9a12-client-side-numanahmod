import { useContext, useEffect, useState } from 'react'

import axios from 'axios'


import Swal from 'sweetalert2'
import { AuthContext } from '../../../providers/AuthProvider'
import { Link } from 'react-router-dom'

const MyWishList = () => {
  const { user } = useContext(AuthContext)
  const [books, setBooks] = useState([])
  const [control, setControl] = useState(false);

  useEffect(() => {
    getData()
  }, [user])

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/carts?email=${user.email}`
    )
    console.log(data);
    setBooks(data)
  }
  

  const handleDeleteAPackage = async id => {
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
            fetch(`${import.meta.env.VITE_API_URL}/deleteAWishList/${id}`, {
                method: 'DELETE'
            })
            .then((res) => res.json())
            .then(data =>{
               if (data.deletedCount > 0) {
                setControl(!control)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                
               }
               getData()
            })
         
        }
      });

   
}
  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className=' gap-x-3 text-center'>
        <h2 className='text-lg font-bold text-violet-600 text-center'>I have booked <span className='px-3 py-1 text-xs text-amber-400 bg-black rounded-full '>
          {books.length}
        </span> </h2>

        
      </div>

      <div className='flex flex-col mt-6 mb-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className=' bg-emerald-300'>
                  <tr className=''>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Package</span>
                      </div>
                    </th>

                   
                    
                    
                    <th className='px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500'>
                      Details  
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500'
                    >
                      Delete 
                    </th>
                  </tr>
                </thead>
                <tbody className=' bg-white divide-y divide-gray-200 '>
                  {books.map(book => (
                    <tr key={book._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {book.tour_type}
                      </td>
                     
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      <div className="card-actions ">
                        <Link    to={`/packageDetails/${book.packageId}`}>
                        <button className="btn btn-secondary ">View Details </button>
                        </Link>
                             </div>
                      </td>
                     
                      
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <button
                            onClick={() => handleDeleteAPackage(book._id)}
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

                         
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyWishList
