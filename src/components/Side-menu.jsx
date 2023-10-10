import React from "react";

const SideMenu = ({ link, name }) => {
    return (
        <>
        <a className="" href={link}>
            <div className="bg-blue-200 hover:bg-blue-300 hover:shadow-sm hover:text-indigo-600 rounded-md h-10  my-2 py-1 px-2">
            {name}
            </div>
        </a>
        </>
    );
};
export default SideMenu;
