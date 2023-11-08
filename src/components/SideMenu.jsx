// import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";


// const SideMenu = ({id, link, name,icon }) => {
//     const pathname = window.location.pathname;
//     const [change, setChange] = useState(false);


//     const [active, setActive] = useState();

//     useEffect(()=>{
//         setActive(window.location.pathname);
//     },[change]);

//     console.log("compare", active===link);
//     console.log("link", link);

//     return (
//         <div key={id}>
//             <Link className="" to={link}>
//                 <div onClick={() => setChange(!change)} className={`flex items-center gap-2 text-lg hover:bg-gray-500 ${active===link ?"text-white bg-gray-600" :""} hover:shadow-sm hover:text-white rounded-md py-2 px-2`}>
//                 {icon}{name}
//                 </div>
//             </Link>
//         </div>
//     );
// };
// export default SideMenu;
