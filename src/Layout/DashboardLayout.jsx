import { Outlet } from "react-router-dom";
import SideBar from "../containers/SideBar";
import Nav from "../components/Navbar";

const DashboardLayout = () => {
    return(
        <>
        <div className="flex ">
            <SideBar />
            <div className="w-[82%] ">
                <div>
                    <Nav/>
                </div>
                <div className="h-[80vh]">
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardLayout;