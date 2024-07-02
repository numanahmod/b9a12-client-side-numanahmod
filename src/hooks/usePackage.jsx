// import { useEffect, useState } from "react";


// const usePackage = () => {
//     const [ package, setPackage] = useState([]);
//     const [loading, setLoading ] = useState(true);

//     useEffect(() =>{
//         fetch('http://localhost:5000/package')
//         .then(res => res.json())
//         .then(data => {
//             setPackage(data);
//             setLoading(false)
//         });
//     },[])
//     return [package, loading]
// };

// export default usePackage;