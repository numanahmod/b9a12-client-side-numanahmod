
import { useEffect, useState } from 'react';


import PackageCard from './PackageCard';

const OurPackages = () => {
  const [pack, setPack] = useState([]);
  
  useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/package`)
          .then(response => response.json())
          .then(data => setPack(data));
  }, []);
    return (
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {pack.map(item => (
              
              <PackageCard key={item._id} item={item}></PackageCard>
    ))}
            
        </div>
    );
};

export default OurPackages;