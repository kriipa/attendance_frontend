
const CreateDept = () => {
    return(
        <div className="">
            <div className="flex h-[600px] justify-center items-center">
                <form action="" className="border-gray-500 rounded-lg border-2 p-7">
                    <div className="m-3">
                        <p className="text-sm pb-2">Department Name</p>
                        <input type="text" placeholder=" Enter department name" className="border border-zinc-400 rounded-md h-9 w-80 text-sm px-2" />    
                    </div>
                    <div className="m-3 pt-3">
                        <p className="text-sm pb-2">Description</p>
                        <input type="text" placeholder=" Enter department name" className="border border-zinc-400 rounded-md h-9 w-80 text-sm px-2" />    
                    </div>

                    <button className="w-80 h-9 m-3 rounded-md bg-gray-600 hover:bg-sky-900 text-white"> Save </button>

                </form>
            </div>

        </div>
    )
}

export default CreateDept;