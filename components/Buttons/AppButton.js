import React from 'react'

const AppButton = ({ type = "button", color = "primary", title = "", size = "lg", onClick }) => {
    switch (size) {
        case "sm":
            return <button onClick={onClick} type={type} className={` ${color === "primary" ? "bg-blue-500 text-white" : color === "warning" ? "bg-app-main-theme text-white hover:bg-orange-300" : color === "light" ? "bg-neutral-200 text-neutral-800 hover:bg-neutral-100" : "bg-neutral-500 text-black"} p-1.5 px-3 rounded-md  text-b-sm font-semibold `}>{title}</button>
        default:
            return <button  onClick={onClick} type={type} className={`w-full ${color === "primary" ? "bg-blue-500 text-white" : color === "warning" ? "bg-app-main-theme text-white" : color === "light" ? "bg-neutral-200 text-neutral-800 hover:bg-neutral-100" : "bg-neutral-500 text-black"} p-2 rounded-md  text-sm font-semibold `}>{title}</button>
    }

}

export default AppButton