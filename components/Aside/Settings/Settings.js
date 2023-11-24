import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBuildings } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const Settings = ({ pathname, asideBarToggle }) => {
    const [show, setShow] = useState(false)
    const closeHandler = () => {
        setTimeout(() => {
            setShow(false)
        }, 200);
    }
    const Menus = () => (
        <ul className={`${asideBarToggle ? "" : "ms-8"} p-2  text-submenu-font`}>
            <li><Link onClick={closeHandler} href={'/settings/company'} className={`p-2 w-full items-center gap-2 flex rounded-md ${pathname === "/settings/company" ? "bg-app-main-logo-shade" : ""}`}><BsBuildings size={18} /> <span>Company</span></Link></li>
            <li><Link onClick={closeHandler} href={'/settings/client'} className={`p-2 w-full items-center gap-2 flex rounded-md ${pathname === "/settings/client" ? "bg-app-main-logo-shade" : ""}`}><BiUser size={18} /> <span>Client</span></Link></li>
            <li><Link onClick={closeHandler} href={'/settings/users'} className={`p-2 w-full items-center gap-2 flex rounded-md ${pathname === "/settings/users" ? "bg-app-main-logo-shade" : ""}`}><FaUsers size={18} /> <span>Users</span></Link></li>
        </ul>
    )

    return (
        <div onMouseEnter={() => { setShow(true) }} onMouseLeave={() => setShow(false)} className="group relative" >
            <Link href={"/settings/company"}>
                <div className={`flex gap-2 text-sm items-center cursor-pointer ${pathname.split("/")[1] === "settings" ? "bg-app-main-logo-shade" : ""} ${asideBarToggle ? "" : "px-5"} py-3 mt-2 `}>
                    <AiOutlineSetting className={`${asideBarToggle ? "mx-auto" : ""}`} size={20} />
                    {!asideBarToggle && <span>Settings</span>}
                </div>
            </Link>
            {asideBarToggle ? <div className={` absolute ${show ? "group-hover:block " : ""} hidden top-0 left-[100%] bg-app-main-theme w-[130px] py-2 rounded-md border shadow-sm`}>
                <Menus />
            </div> : <Menus />}
        </div>
    );
};

export default Settings;
