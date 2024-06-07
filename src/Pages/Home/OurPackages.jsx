import { FaHeartCircleCheck } from 'react-icons/fa6';
import slider2 from '/ratargul.jpg'
import { Link } from 'react-router-dom';

const OurPackages = () => {
    return (
        <div>
            
            <div className="card w-96 glass">
            <div>
                <img src={slider2} alt=""  />
               <button className=' absolute -mt-4'>
               <FaHeartCircleCheck className=' text-pink-500' />
               </button>
                </div>
  <div className="card-body">
    <h2 className="card-title"><span className=' text-orange-500 font-bold'>Tour Type:</span> <span className=' font-bold'> Adventure</span></h2>
    <p className=' text-xl font-bold text-lime-600'>Trip to the Mountains</p>
    <h2 className="card-title"><span className=' text-orange-500 font-bold'>Price:</span> <span className=' font-bold'>250 $ </span></h2>

    <div className="card-actions justify-end">
      <Link>
      <button className="btn btn-primary">View Package</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default OurPackages;