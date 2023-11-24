import { useState } from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import CreateDept from "../forms/CreateDept";
import CreateDepartmentModal from "../components/CreateDepartmentModal";
// import { Link } from "react-router-dom";

const Dept = () => {
    const [open, setOpen] = useState(false);
    return(
        <div>
            <h1> DEPARTMENTS </h1>
                {/* <Link to="/create-dept">
                    <button className="bg-gray-700 text-white px-4 py-1 rounded-md"> Create Department </button>
                </Link> */}
                <Button handleClick={() => {setOpen(!open)}} buttonName={"Create Department"}/>
                {
                    open &&
                    // <p> Open </p> 
                    <CreateDepartmentModal open={open} setOpen={setOpen}/>
                }
        {/* <CreateDept/> */}
        <Table/>
        </div>
    )
}

export default Dept;
