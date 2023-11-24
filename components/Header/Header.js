"use client"
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MY_ACCOUNT_MODAL } from "@/redux/layoutReducer/layout.reducer";
import { setCookie } from "@/lib/helpers";


const Header = () => {
    //hooks
    const { userInfo } = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    //function 
    const myAccountHandler = () => dispatch({ type: MY_ACCOUNT_MODAL, payload: true })


    const logout = () => {
        setCookie("access_token", "", 0)
        window.location.href = "/login"
    }


    return (
        <header className="h-[10vh] bg-white  border shadow-sm w-full px-2">
            <nav className="flex justify-between items-center h-full">
                <Image width={170} src={logo} alt="FPS - app logo" />
                <div className="h-full items-center relative flex  cursor-pointer duration-300 group">
                    <button className="group-hover:text-blue-600 text-sm font-semibold tracking-wide">
                        {userInfo && `${userInfo?.first_name} ${userInfo?.last_name}`}
                    </button>
                    <div className="hidden group-hover:block duration-300 bg-white absolute -left-[45%] top-[100%] border shadow-sm rounded-md  w-[120px]">
                        <ul className="text-[13px] font-[500] py-2 ">
                            <li>
                                <button
                                    onClick={myAccountHandler}
                                    className="p-1 px-2 flex items-center gap-2 hover:bg-gray-100"
                                >
                                    <HiOutlineUserCircle /> My Account
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={logout}
                                    className="p-1 px-2 flex items-center gap-2 hover:bg-gray-100"
                                >
                                    <FaSignOutAlt /> {"Logout"}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;
