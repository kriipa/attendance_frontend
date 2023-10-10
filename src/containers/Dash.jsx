import school1 from "/Users/kriipa/vite/my-project/src/assets/images/school1.png";
import { BiLogOut } from 'react-icons/bi';
import SideMenu from "../components/Side-menu";


const Dash = () => {
    const menuList =[
    {
        id:1,
        name:"Dashboard",
        link:"#"
    },
    {
        id:2,
        name:"Attendance",
        link:"#"
    },
    {
        id:3,
        name:"Employee",
        link:"#"
    },
    {
        id:4,
        name:"Department",
        link:"#"
    },
    
    ]

    return(
        <div>
            {/* Nav */}
            <div className="Nav">
                <div className="shadow-lg inline-block py-2 px-3 h-screen w-56 align-items-center rounded-lg border-gray-950 border-1">
                    <div className="flex justify-center">
                        <img className="h-24 w-24 app-logo" src={school1} alt="" />
                    </div>
                    <div className="grid grid-rows-4 align-items-center my-3 mx-1 ">
                        {menuList.map((menu)=>
                        <SideMenu  name={menu.name} link={menu.link}/>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash;