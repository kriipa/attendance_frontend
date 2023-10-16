import school1 from "/Users/kriipa/vite/my-project/src/assets/images/school1.png";
import ayataLogo from "../assets/images/ayataLogo.png";
import { BiLogOut } from 'react-icons/bi';
import {LuLayoutDashboard} from 'react-icons/lu';
import {MdCoPresent} from 'react-icons/md';
import {BsPeople} from 'react-icons/bs';
import {AiOutlinePartition} from 'react-icons/ai';
import {TbFileReport} from 'react-icons/tb';
import {SlCalender} from 'react-icons/sl'
import SideMenu from "../components/SideMenu";
import Table from "../components/table";
import Nav from "../components/Navbar";
import Dept from "../pages/Department";


const SideBar = () => {
    const menuList =[
    {
        id:1,
        name:"Dashboard",
        icon:<LuLayoutDashboard/>,
        link:"#"
    },
    {
        id:2,
        name:"Attendance",
        icon:<MdCoPresent/>,
        link:"#"
    },
    {
        id:3,
        name:"Employee",
        icon:<BsPeople/>,
        link:"#"
    },
    {
        id:4,
        name:"Department",
        icon:<AiOutlinePartition/>,
        link:"/deptarment"
    },
    {
        id:5,
        name:"Report",
        icon:<TbFileReport/>,
        link:"#"
    },
    {
        id:6,
        name:"Calender",
        icon:<SlCalender/>,
        link:"#"
    },
    {
        id:7,
        name:"Logout",
        icon:<BiLogOut/>,
        link:"#"
    },
    ]

    return(
        <div className="flex w-[18%]">
            {/* Nav */}
                <div className="w-full bg-gray-200 shadow-lg inline-block py-2 px-3 h-screen align-items-center rounded-lg border-gray-950 border-1">
                    <div className="ms-2 my-4">
                        <img className="h-10 app-logo cursor-pointer" src={ayataLogo} alt="Logo" />
                    </div>
                    <hr className="border-gray-500 mt-3" />
                    <div className="grid grid-rows-4 align-items-center my-3 mx-1 ">
                        {menuList.map((menu)=>
                        <SideMenu  name={menu.name} link={menu.link} icon={menu.icon}/>
                        )}
                    </div>
                </div>
        </div>
    )
}

export default SideBar;