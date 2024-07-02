import { useContext } from "react";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Link,  useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCartOfPackage from "../../hooks/useCartOfPackage";
import Swal from "sweetalert2";


const TypeDetails = () => {
    const details = useLoaderData();

    const { user} = useContext(AuthContext);
 
const location = useLocation();
const navigate = useNavigate(); 
const axiosSecure = useAxiosSecure()
const [, refetch] = useCartOfPackage();

const { tour_type, trip_title,
    price, images, _id} = details;

    const handleAddPackage = () => {
        if(user && user.email){
          
          const packageItem = {
            packageId: details._id,
            email: user.email,
          tour_type,
          trip_title,
          price,
          images,
          }
          axiosSecure.post(`/carts`, packageItem)
          .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${tour_type} added successfully`,
                showConfirmButton: false,
                timer: 1500
              });
              //refetch cart to update the cart items count
              refetch()
            }
          })
      
        } else {
          Swal.fire({
            title: "You are not login",
            text: "Please login to add package",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login!"
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/logIn', {state: {from: location}})
            }
          });
        }
        // console.log(spot);
      }
    return (
        <div className=" pt-28 lg:ml-[450px]">
           <div key={'_id'} className="card w-96 glass">
            <div>
            
                <img src={images[0]} alt="" className=" w-96 h-72" />
               <button 
              onClick={handleAddPackage}
               className=' absolute -mt-4'>
               <FaHeartCircleCheck className=' text-pink-500' />
               </button>
                </div>
  <div className="card-body">
    <h2 className="card-title"><span className=' text-orange-500 font-bold'>Tour Type:</span> <span className=' font-bold'>{tour_type} </span></h2>
    <p className=' text-xl font-bold text-lime-600'>Trip to the Mountains</p>
    <h2 className="card-title"><span className=' text-orange-500 font-bold'>Price:</span> <span className=' font-bold'>250 $ </span></h2>

    <div className="card-actions justify-end">
      <Link    to={`/packageDetails/${_id}`}>
      <button className="btn btn-primary ">View Package</button>
      </Link>
    </div>
  </div>
             </div>
        </div>
    );
};

export default TypeDetails;