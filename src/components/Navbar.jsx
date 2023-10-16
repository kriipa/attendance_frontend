import profImg from "../assets/images/profImg.png";

const Nav = () =>{
    return(
        <>
        <div className=" flex h-20 w-full items-center justify-between bg-gray-300 shadow-sm">
                <a href="" className="mx-4">Notices</a>
                <div>  {/* Dropdown */}
                    <button className="px-3 id='menu-button' aria-expanded='true' aria-haspopup=true">    
                        <img src={profImg} className="h-12" alt="profile" />
                    </button>
                    {/* <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                        <form method="POST" action="#" role="none">
                            <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                        </form>
                        </div>
                    </div> */}
                </div>
        </div>
        </>
    )
}

export default Nav;