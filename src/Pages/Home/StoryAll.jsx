import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const StoryAll = () => {
    const [pack, setPack] = useState([]);
  
  useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/stories`)
          .then(response => response.json())
          .then(data => setPack(data));
  }, []);
    return (
        <>
        <h1 className=" text-3xl font-bold text-lime-700 text-center pt-28"> All Stories of our Tourist </h1>
        <div className='grid grid-cols-1 gap-8 mt-8 ml-12 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  pt-4 pb-5'>
            {pack.map(item => (
              
              <div className=" bg-slate-400 w-72 h-96 border-2  border-red-500 p-8" key={item._id}>
                <img src={item.speaker_img} alt="" className=" w-28 h-28 rounded-full mb-4" />
                <h1>Tourist Name: <span className=" text-orange-600 font- mt-2 pt-3"> {item.speaker_name} </span> </h1> 
                <span className="text-xs text-black">4 hours ago</span>
                <h3 className="card-title"><h2>Tour: <span className=" font-bold text-xl"> {item.spot} </span> </h2></h3>
                
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">My Story</div>
                <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                    <div className="card-body">
                    
                    <h1> <span className=" text-black  font-bold ">My Experience:</span>  <div className="  ">   {item.story}  </div>  </h1>
                    </div>
                </div>
                </div>
                 <br />
               <Link to={`/storyDetails/${item._id}`}><button className=" btn btn-primary mt-4 ml-16">Details </button></Link>

        
                </div>
                ))}
            
        </div>
      
        
       </>
    );
};

export default StoryAll;