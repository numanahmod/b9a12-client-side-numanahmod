import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


import slider1 from '/rangamati.jpg'
import slider2 from '/ratargul.jpg'
import slider3 from '/sadapathor.jpg'
import slider4 from '/saint_martin.jpeg'

import slider5 from '/srimangal.jpg'
import slider6 from '/sundarbans.jpeg'
import slider7 from '/sundorban3.jpg'



const Banner = () => {
  return (
    <div>
    <Carousel>
        <div>
            <img src={slider1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={slider2}/>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={slider3} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={slider4} />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img src={slider5} />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img src={slider6} />
            <p className="legend">Legend 6</p>
        </div>
        <div>
            <img src={slider7} />
            <p className="legend">Legend 7</p>
        </div>
    </Carousel>
    
</div>
  );
};

export default Banner;



// import slider1 from '../../assets/home/01.jpg';
// import slider2 from '../../assets/home/02.jpg';
// import slider3 from '../../assets/home/03.png';
// import slider4 from '../../assets/home/04.jpg';
// import slider5 from '../../assets/home/05.png';
// import slider6 from '../../assets/home/06.png';

