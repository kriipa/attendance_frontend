import school1 from "/Users/kriipa/vite/my-project/src/assets/images/school1.png";
import ayataLogo from "../assets/images/ayataLogo.png";
import { BiLogOut } from 'react-icons/bi';
import { IoMdLogIn } from 'react-icons/io';
import {LuLayoutDashboard} from 'react-icons/lu';
import {MdOutlineCoPresent} from 'react-icons/md';
import {BsPeople} from 'react-icons/bs';
import {AiOutlinePartition} from 'react-icons/ai';
import {TbFileReport} from 'react-icons/tb';
import {SlCalender} from 'react-icons/sl';
import Table from "../components/Table";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


const SideBar = () => {
    // const pathname = window.location.pathname;

    const [active, setActive] = useState();
    const [change, setChange] = useState(false);

    const menuList =[
    {
        id:1,
        name:"Dashboard",
        icon:<LuLayoutDashboard/>,
        link:"/"
    },
    {
        id:2,
        name:"Attendance",
        icon:<MdOutlineCoPresent/>,
        link:"/attendance"
    },
    {
        id:3,
        name:"Employee",
        icon:<BsPeople/>,
        link:"/create-emp"
    },
    {
        id:4,
        name:"Department",
        icon:<AiOutlinePartition/>,
        link:"/dept"
    },
    {
        id:5,
        name:"Report",
        icon:<TbFileReport/>,
        link:"/report"
    },
    {
        id:6,
        name:"Calender",
        icon:<SlCalender/>,
        link:"/calender"
    },
    {
        id:7,
        name:"Logout",
        icon:<BiLogOut/>,
        link:"/login"
    },
    {
        id:8,
        name:"Login",
        icon:<IoMdLogIn/>,
        link:"/log-resp"
    },
    {
        id:9,
        name:"Register",
        icon:<IoMdLogIn/>,
        link:"/register"
    },
    {
        id:10,
        name:"Axios",
        icon:<IoMdLogIn/>,
        link:"/axios-page"
    },
    {
        id:11,
        name:"Practice Dashboard",
        icon:<LuLayoutDashboard/>,
        link:"/one-page"
    },
    ]

    useEffect(()=>{
        setActive(window.location.pathname);
    },[change]);

    return(
        <div className="flex w-[18%]  md:min-w-[50px]">
            {/* Nav */}
                <div className="w-full bg-gray-200 shadow-lg inline-block py-2 px-3 h-screen align-items-center rounded-lg border-gray-950 border-1">
                    <div className="ms-2 my-4 ">
                        <img className="h-10 app-logo cursor-pointer" src={ayataLogo} alt="Logo" />
                    </div>
                    <hr className="border-gray-500 mt-3" />
                    <div className="grid grid-rows-4 align-items-center my-3 mx-1 ">
                        {
                            menuList.map((menu) => {
                                return(
                                    <div key={menu.id}>
                                        <Link className="" to={menu.link}>
                                            <div onClick={() => setChange(!change)} 
                                            className={`flex items-center gap-2 text-lg hover:bg-gray-500 md:w-[50px] md:justify-center
                                            ${active===menu.link ?"text-white bg-gray-600" :""} hover:shadow-sm hover:text-white rounded-md py-2 px-2`
                                            }>

                                                {menu.icon}
                                            
                                            <p className="md:hidden md:absolute">
                                                {menu.name}
                                            </p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        </div>
    )
}

export default SideBar;