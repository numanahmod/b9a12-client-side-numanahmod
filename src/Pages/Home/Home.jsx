import SectionTitle from "../../Shared/SectionTitle";
import Banner from "./Banner";
import StoriesShare from "./StoriesShare";
import TabTourism from "./TabTourism";
import TourGuides from "./TourGuides";
import TourType from "./TourType";



const Home = () => {
    return (
       <>
        <div>
            {/* banner   */}
          <Banner></Banner>
        </div>
<div>
{/* // Tourism and Travel Guide */}
<SectionTitle
subHeading={'Tourism and Travel Guide'}
heading={'Look at our Tourism and Travel Guide'}
></SectionTitle>

<TabTourism></TabTourism>

</div>
<div>
 <SectionTitle
 heading={'Tour Types'}
 ></SectionTitle>

 <TourType></TourType>
</div>
<div>
  <SectionTitle heading={'Tourist Stories'}
  
  >

  </SectionTitle>
  <StoriesShare></StoriesShare>
</div>
       <TourGuides></TourGuides>
       </>

    );
};

export default Home;