import React from "react";


const SideMenu = ({ link, name,icon }) => {
    return (
        <>
        <a className="" href={link}>
            <div className="flex items-center gap-2 text-lg hover:bg-gray-600 hover:shadow-sm hover:text-white rounded-md py-2 px-2">
            {icon}{name}
            </div>
        
        </a>
        </>
    );
};
export default SideMenu;
