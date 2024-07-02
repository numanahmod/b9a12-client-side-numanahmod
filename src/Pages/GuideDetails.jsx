import axios from "axios";
import { useContext } from "react";
import { useLoaderData,} from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";


const GuideDetails = () => {
    const detail = useLoaderData()
	const {user } = useContext(AuthContext);
    const handleReview = async e =>{
        e.preventDefault();
        const form = e.target;

       
        const comments = form.comments.value;
        const rating = form.rating.value;
    
        const reviewItems = {comments, rating, guide_name: detail.name, reviewer_name
              :user.displayName, reviewer_email: user.email			}
        console.log(reviewItems);

        //send data to the server 

        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/reviews`,
              reviewItems
            )
            console.log(data)
            if (data.insertedId) {
              Swal.fire({
                  title: 'Success!',
                  text: `Thank you ${user.displayName}`,
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              
          }
           
          } catch (err) {
            console.log(err)
          }

    }


  

    return (
        <div className="items-center justify-center lg:ml-96">
            <div className="pt-20">
           
            <img  alt="" />
            </div>
            <div className="  flex flex-col max-w-[800px] -ml-20 p-6 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
	<img src={detail.profile_picture} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 dark:bg-gray-500 aspect-square" />
	<div>
		<h2 className="text-xl font-semibold"> {detail.name} </h2>
		<span className="block pb-2 text-sm text-gray-400 dark:text-gray-600"> {detail.education} </span>
		<p> <span className=" text-orange-400">Skills:  </span>  
     <span> {detail.skills[0]}</span>, 
     <br /> <span className=" ml-[44px]">{detail.skills[1]}</span> 
     <br /> <span className=" ml-[44px]">{detail.skills[2]}</span> 
     </p> <br />
     <p> <span className=" text-red-400 font-bold">Experience: </span>  <span> {detail.work_experience} </span> </p>
     <br />
     <p> <span className=" text-orange-400">Contact:  </span>  
     <span> {detail.contact_details.phone}</span>, 
     <br /> <span className=" ml-[44px]">{detail.contact_details.email}</span> 
     <br /> <span className=" ml-[44px]">{detail.contact_details.address}</span> 
     </p> <br />


     <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			{/* <div>
				<h1>
					<span>Rating: </span> <span>4.5</span>
				</h1>
				<div>
					<h2>My client Comments: </h2>
					<div>
						<p>client Id</p>
						<p>Client Comment:</p>
					</div>
				</div>
			</div> */}
		</div>
		<div className="flex flex-col w-full">
			<form onSubmit={handleReview} >
			<label htmlFor="">Rating:</label> <br />

			<select
              name='rating'
              id=''
              className='border p-2 rounded-md bg-slate-400 text-black'			  type='number'
		required
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select> <br />

			
			<label >Your comment</label> <br />
			<input required type="text" name="comments" id="" className=" w-96 h-12 bg-slate-400 text-black"/>
			<input
			
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#293096] bg-purple-400 duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Leave Feedback"
          />
			</form>
		</div>
	</div>
	<div className="flex items-center justify-center">
		<a rel="noopener noreferrer" href="#" className="text-sm text-gray-400 dark:text-gray-600">Maybe later</a>
	</div>
</div>
	</div>
</div>
        </div>
    );
};

export default GuideDetails;