import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


  


const MainLayout = () => {
    return (
        <div className="w-[1200px justify-center items-center] m-auto">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           
        </div>
    );
};

export default MainLayout;