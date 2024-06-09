/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import VideoPlayer from '../../Routes/VideoPlayer';
import OurPackages from './OurPackages';
import TourGuidesList from './TourGuidesList';

//motion 
import {motion} from 'framer-motion'
//variants 
import {fadeIn} from '../../variants'

// eslint-disable-next-line react/prop-types
const TabTourism = () => {
  // console.log('jobssss data ',jobs);
    return (
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}} className='m-10'>

          {/* <p>   TAbbbbb </p> */}
          <Tabs>
    <div className='flex items-center justify-center text-black font-bold text-xl bg-slate-300'>
    <TabList className={'bg-slate-300'}>
      <Tab>Overview</Tab>
      <Tab>Our Packages</Tab>
      <Tab>Meet Our Tour Guides</Tab>
      
    </TabList>
    </div>
    <TabPanel>
      
        <div className='  xl:ml-72 md:ml-28 gap-8 mt-8 xl:mt-16 items-center justify-center'>
        {
          // jobs?.filter(j=> j.job_type==='Overview'
          // )?.map(job =>(
          //   <JobCard key={job._id} job={job} />
          // ))
        }
        <VideoPlayer></VideoPlayer>
        </div>
        
         
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          // jobs?.filter(j=> j.job_type==='Our Packages'
          // )?.map(job =>(
          //   <JobCard key={job._id} job={job} />
          // ))
        }
        <OurPackages></OurPackages>
        </div>
    </TabPanel>
    <TabPanel>
    <div className=' gap-8 mt-8 xl:mt-16 xl:grid-cols-3'>
        {
          // jobs?.filter(j=> j.job_type==='Meet Our Tour Guides'
          // )?.map(job =>(
          //   <JobCard key={job._id} job={job} />
          // ))
        }
        <TourGuidesList></TourGuidesList>
        </div>
    </TabPanel>
    
    
       </Tabs>
        </motion.div>
    );
};

export default TabTourism;