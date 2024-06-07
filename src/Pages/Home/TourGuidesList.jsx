import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TourGuidesList = () => {

    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('TouristGuide.json')
            .then(response => response.json())
            .then(data => setGuides(data));
    }, []);



    return (
        <div>
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
    
    );
};

export default TourGuidesList;