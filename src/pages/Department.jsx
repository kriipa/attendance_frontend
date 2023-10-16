import Table from "../components/table";
import CreateDept from "../forms/CreateDept";
import { Link } from "react-router-dom";

const Dept = () => {
    return(
        <div>
            <h1> DEPARTMENTS </h1>
                <Link to="/create-dept">
                    <button className="bg-gray-700 text-white px-4 py-1 rounded-md"> Create Department </button>
                </Link>
        {/* <CreateDept/> */}
        <Table/>
        </div>
    )
}

export default Dept;
