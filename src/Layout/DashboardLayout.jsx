import { Outlet } from "react-router-dom";
import SideBar from "../containers/SideBar";
import Nav from "../components/Navbar";

const DashboardLayout = () => {
    return(
        <>
        <div className="flex ">
            <SideBar />
            <div className="w-[82%] h-[100vh] overflow-auto">
                <div className="sticky top-0">
                    <Nav/>
                </div>
                <div className="">
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardLayout;