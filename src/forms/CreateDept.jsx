import { useEffect, useState } from "react";

const CreateDept = () => {
    const [form, setForm] = useState({
        departmentName : '',
        departmentDesc : '',
        numberOfEmployees : '',
    });

    const departmentList = [
        {
            id : 1,
            title : 'Department Name',
            key : 'departmentName',
            placeholder : 'Enter department name',
        },

        {
            id : 2,
            title : 'Department Description',
            key : 'departmentDesc',
            placeholder : 'Enter department description',
        },
        {
            id : 3,
            title : 'Number of Employees',
            key : 'numberOfEmployees',
            placeholder : 'Enter no. of employees in the department',
        },
    ];

    const [data, setData] = useState();
    const [change, setChange] = useState(false);

    const existingData = localStorage.getItem('dept');
    console.log("change",change)


    const handleAdd = (e) => { 
        e.preventDefault();  
        const dataArray = existingData ? JSON.parse(existingData) : [];
        dataArray.push(form);  
        localStorage.setItem('dept', JSON.stringify(dataArray));
        setChange(!change)
        console.log("dataArray",dataArray)
    }

    const handleFilter = (e) => {
        e.preventDefault();  
        const filteredResult = data.filter(data => data.numberOfEmployees<4);
        console.log("Filtered result", filteredResult);
        setData(filteredResult);
    }   

    const handleGet = (e) => {
        // e.preventDefault()
        // const getDept = JSON.parse(existingData);
        // // setChange(!change)
        // setData(getDept);
    }

    console.log("data",data)
    useEffect(()=>{
        const getDept = JSON.parse(existingData);
        setData(getDept);
    },[change])

    return(
        <div>
            <div className="flex h-[600px] justify-center items-center">
                <form action="" className="border-gray-500 rounded-lg border-2 p-7 md:w-1/2">
                    <div className="m-3">
                        {
                            departmentList.map((department) => {
                                return(
                                    <div key={department.id}>
                                        <p className="text-sm pb-2">{department.title}</p>
                                        <input type="text" className="border border-zinc-400 rounded-md h-9 w-full text-sm px-2 mb-3" 
                                            placeholder={department.placeholder}
                                            value={form.key}
                                            onChange={item => {setForm({
                                                ...form,
                                                [department?.key] : item.target.value
                                            })}}
                                        />  
                                    </div>
                                );
                            })
                        } 
                    </div>
                    <div className="flex md:flex-wrap ">
                        <button onClick={(e) => handleAdd(e)} className="md:w-full w-80 h-9 m-3 rounded-md bg-gray-600 hover:bg-sky-900 text-white"> Save </button>

                        <button onClick={(e) => handleFilter(e)} className="md:w-full w-80 h-9 m-3 rounded-md bg-gray-600 hover:bg-sky-900 text-white"> Filter </button>
                    </div>
                </form>                
            </div>

            {
                data?.map((item) => {
                    return(
                        <div className="m-3" key={item.departmentName}>
                            <p>Department Name : {item?.departmentName} </p>
                            <p> Department Description : {item?.departmentDesc} </p>
                            <p> No. of Employees :  {item?.numberOfEmployees} </p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CreateDept;