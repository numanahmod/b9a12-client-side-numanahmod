import { Outlet,  } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


  

const MainLayout = () => {

    // const location = useLocation();

    // const noHederFooter = location.pathname.includes('logIn') || location.pathname.includes('register')
    return (
        <div className="w-[1200px justify-center items-center] m-auto">
           {/* { noHederFooter || */}
            <Navbar></Navbar>
            {/* } */}
           <Outlet></Outlet>
          {/* {noHederFooter ||   */}
          <Footer></Footer>
        {/* //   } */}
           
        </div>
    );
};

export default MainLayout;