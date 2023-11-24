"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Tablink = ({ link, lable, border = true }) => {
    const pathname = usePathname()
    return (
        <Link
            href={link}
            className={` ${pathname === link ? "text-orange-400  border-orange-400 border-t-2" : "text-neutral-700"} p-2 px-6  inline-block  ${border ? "border-r border-r-neutral-300" : ""}`}
        >
            <span>{lable}</span>
        </Link>
    )
}

export default Tablink