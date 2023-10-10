const Login = () => {
    return(
        <div className="flex justify-center">
            
            <div className="flex items-center mt-20 justify-center gap-4 rounded-md border border-gray-400 h-[550px] w-fit ">
                <div className="w-1/2 lg:w-full md:hidden">
                    <img src="https://www.talentproindia.com/wp-content/uploads/2020/11/How-Does-the-Attendance-Management-System-Help-the-Employees.jpg" alt="image" />
                </div>
                <div className="w-1/2 flex justify-center lg:w-full"> 
                    <div>
                        <div className=" mt-4 mb-4">
                            <p className="text-bold text-xl text-sky-800 ps-2">Welcome to Attendees!</p>
                            <p className="text-sm text-gray-400 ps-2">Please sign in to continue</p>
                        </div>
                        <form className="px-6 py-5 rounded-md   inline-block " action="">
                            

                            <div className="mb-4"> 
                                <label className="block text-sm text-gray-500 mb-2"> Email : </label>
                                <div>
                                    <input type="email" placeholder=" Enter email" className="border border-zinc-400 rounded-sm h-9 w-80 text-sm px-2" />    
                                </div>       
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm text-gray-500 mb-2"> Password : </label>
                                <div>
                                <input type="password" placeholder="Enter password" className="border border-zinc-400 rounded-sm h-9 w-80 text-sm px-2" />                
                                </div>
                            </div>

                            <button className="w-full h-9 rounded-md bg-sky-800 hover:bg-sky-600 text-white"> Submit </button>

                            <div className="flex justify-end">
                                <a href="" className="text-blue-400 hover:text-blue-600 text-sm mt-2 text-end"> Forgot password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;