"use client";
import React from "react";
import "./Sidebar.css";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ASIDE_BAR_TOGGLE } from "@/redux/layoutReducer/layout.reducer";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import Settings from "./Settings/Settings";
import { AiOutlineDashboard } from "react-icons/ai";
export const AsideBar = ({ children }) => {
    //hook
    const dispatch = useDispatch();
    const { asideBarToggle } = useSelector((state) => state?.layoutReducer);
    const pathname = usePathname();

    const Menus = [
        {
            key: "/",
            icon: (
                <AiOutlineDashboard
                    size={20}
                    className={`${asideBarToggle ? "mx-auto" : ""}`}
                />
            ),
            label: "Dashboard",
            menu: "/",
        },
        {
            key: "/search/property-search",
            icon: (
                <BiSolidDashboard
                    size={20}
                    className={`${asideBarToggle ? "mx-auto" : ""}`}
                />
            ),
            label: "Search",
            menu: "search",
        },
        {
            key: "/reports",
            icon: (
                <TbReport size={20} className={`${asideBarToggle ? "mx-auto" : ""}`} />
            ),
            label: "Reports",
            menu: "reports",
        },
        {
            key: "/setting",
        },
    ];

    return (
        <div className="flex">
            <aside
                className={`bg-app-main-theme h-[90vh]  sidebar ${asideBarToggle ? "collapsed" : ""
                    }  text-white`}
            >
                <div>
                    <div className="relative">
                        <div
                            onClick={() => dispatch({ type: ASIDE_BAR_TOGGLE })}
                            className="text-sm w-7 h-7 rounded-full cursor-pointer -right-2 top-0 absolute bg-app-main-logo-shade flex justify-center items-center text-white"
                        >
                            {!asideBarToggle ? (
                                <FaAngleLeft color="#fff" />
                            ) : (
                                <FaAngleRight color="#fff" />
                            )}
                        </div>
                    </div>
                    <ul className="mt-8">
                        {Menus.map((ele) => {
                            return (
                                <li key={ele.key}>
                                    {ele.key === "/setting" ? (
                                        <Settings
                                            pathname={pathname}
                                            asideBarToggle={asideBarToggle}
                                        />
                                    ) : (
                                        <Link
                                            className={`flex gap-2 text-menu-font items-center ${pathname?.split("/")[1] === ele.menu ||
                                                pathname === ele.menu
                                                ? "bg-app-main-logo-shade"
                                                : ""
                                                } ${asideBarToggle ? "" : "px-5"} py-3 mt-2 `}
                                            href={ele.key}
                                        >
                                            {ele.icon} {!asideBarToggle && <span>{ele.label}</span>}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>
            <main className="h-[90vh] overflow-y-auto flex-1">
                <div className="flex-1 bg-white m-4">{children}</div>
            </main>
        </div>
    );
};
