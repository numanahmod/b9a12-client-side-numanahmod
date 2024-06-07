import SectionTitle from "../../Shared/SectionTitle";
import Banner from "./Banner";
import TabTourism from "./TabTourism";



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
</div>
       
       </>

    );
};

export default Home;