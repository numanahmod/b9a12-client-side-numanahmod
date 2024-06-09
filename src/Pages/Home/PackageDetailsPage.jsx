import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../componants/BookingForm";


const PackageDetailsPage = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
      fetch('TouristGuide.json')
          .then(response => response.json())
          .then(data => setGuides(data));
  }, []);

    return (
        <div className=" pt-20">
           <section className="py-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
		
	</div>
</section> 
<p className="text-center"> <span className=" text-amber-400 font-bold text-3xl ">About: </span>  <span className=""> Abou klefufhoidfjidsf</span>      </p>

<div>
	<p className=" text-3xl text-lime-600 font-bold text-center">Tour Plane</p>
	<div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
					
  <div className="collapse-title text-xl font-medium text-center"> <button className="btn text-center bg-lime-400"> Day 1 </button> <br />
  What is an access token and refresh token?
  </div>
  <div className="collapse-content"> 
    <p> A careful balance between security and user experience is essential for authentication and authorization. A user may become irritated if protocols are overly strict. On the other hand, a security breach is imminent if permission systems are too loose.

Access and refresh tokens provide a solution that meets both requirements.

An access token (from an authorization server) allows temporary access to restricted resources such as APIs or websites. 

Generally, access tokens are valid for only a few minutes or hours, depending on the setting to safeguard the resource server. They also include security features like signatures.

Any user with an access token is automatically authenticated, regardless of whether they are genuine or malicious.

In OAuth 2.0 authorization frameworks, refresh tokens allow developers to manage users’ sessions across native, web-based, and single-page apps.

Additionally, they allow users to log in and stay connected without providing their passwords for long periods. Further, they add a layer of security for sensitive data, improving the user experience.

Refresh tokens can last from a few days to a few months.

Refresh tokens by themselves don’t grant the user any access. To avoid needless re-authentication, they prolong the duration of the session.
 </p>
  </div>
</div>
                    

                   
                </div>
	<div className="mt-4">

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
					
  <div className="collapse-title text-xl font-medium text-center"> <button className="btn text-center bg-lime-400"> Day 2 </button> <br />
  What is an access token and refresh token?
  </div>
  <div className="collapse-content"> 
    <p> A careful balance between security and user experience is essential for authentication and authorization. A user may become irritated if protocols are overly strict. On the other hand, a security breach is imminent if permission systems are too loose.

Access and refresh tokens provide a solution that meets both requirements.

An access token (from an authorization server) allows temporary access to restricted resources such as APIs or websites. 

Generally, access tokens are valid for only a few minutes or hours, depending on the setting to safeguard the resource server. They also include security features like signatures.

Any user with an access token is automatically authenticated, regardless of whether they are genuine or malicious.

In OAuth 2.0 authorization frameworks, refresh tokens allow developers to manage users’ sessions across native, web-based, and single-page apps.

Additionally, they allow users to log in and stay connected without providing their passwords for long periods. Further, they add a layer of security for sensitive data, improving the user experience.

Refresh tokens can last from a few days to a few months.

Refresh tokens by themselves don’t grant the user any access. To avoid needless re-authentication, they prolong the duration of the session.
 </p>
  </div>
</div>
                    

                   
                </div>
	<div className="mt-4 mb-4">

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
					
  <div className="collapse-title text-xl font-medium text-center"> <button className="btn text-center bg-lime-400"> Day 3 </button> <br />
  What is an access token and refresh token?
  </div>
  <div className="collapse-content"> 
    <p> A careful balance between security and user experience is essential for authentication and authorization. A user may become irritated if protocols are overly strict. On the other hand, a security breach is imminent if permission systems are too loose.

Access and refresh tokens provide a solution that meets both requirements.

An access token (from an authorization server) allows temporary access to restricted resources such as APIs or websites. 

Generally, access tokens are valid for only a few minutes or hours, depending on the setting to safeguard the resource server. They also include security features like signatures.

Any user with an access token is automatically authenticated, regardless of whether they are genuine or malicious.

In OAuth 2.0 authorization frameworks, refresh tokens allow developers to manage users’ sessions across native, web-based, and single-page apps.

Additionally, they allow users to log in and stay connected without providing their passwords for long periods. Further, they add a layer of security for sensitive data, improving the user experience.

Refresh tokens can last from a few days to a few months.

Refresh tokens by themselves don’t grant the user any access. To avoid needless re-authentication, they prolong the duration of the session.
 </p>
  </div>
</div>
                    

                   
                </div>
      <div>
        <h2 className=" text-3xl text-green-500 font-bold text-center">Our tour guides</h2>
        <div className="overflow-x-auto" >
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Email</th>
        <th>Experience</th>
        <th></th>
      </tr>
    </thead>
    {guides.map(guide => (<tbody key={'_id'}>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={guide.profile_picture} />
              </div>
            </div>
            <div>
              <div className="font-bold"> {guide.name} </div>
             
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm"> {guide.contact_details.email} </span>
        </td>
        <td> {guide.work_experience} </td>
        <th>
          <Link to={`/guideDetails/${guide._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
        </th>
      </tr>
     
      
      
    </tbody>
    ))}
   
    
  </table>
</div>
      </div>
   <div>
   
      <BookingForm></BookingForm>
   </div>
</div>

        </div>
    );
};

export default PackageDetailsPage;