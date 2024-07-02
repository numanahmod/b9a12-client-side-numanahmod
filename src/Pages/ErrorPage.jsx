
import { Link } from 'react-router-dom';
import img1 from '/404.jpg'


const ErrorPage = () => {
    
    return (
        <>
       <section className="bg-white dark:bg-gray-900 ">
    <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-3">
        <div className="wf-ull lg:w-1/2 ml-20">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400"> error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for does not exist.Here are some helpful links:</p>

            <div className=" items-center mt-6 gap-x-3">
                
                <Link to={'/'} ><button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-orange-400 rounded-lg shrink-0 sm:w-auto hover:bg-yellow-600 dark:hover:bg-green-500 dark:bg-green-600 font-bold">
                    Take me home
                </button></Link>
            </div>
        </div>
		
		<div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
			<img src={img1} alt="" className="w-full max-w-lg lg:mx-auto -ml-8"/>
		</div>

        
    </div>
</section>
 
        </>
    );
};

export default ErrorPage;