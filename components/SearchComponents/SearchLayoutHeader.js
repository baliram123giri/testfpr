import React from 'react'
import { FaRegAddressCard } from 'react-icons/fa'

const SearchLayoutHeader = ({ icon = true, title }) => {
    return (
        <div className='bg-orange-50 shadow-sm p-2 border rounded-md flex gap-2 items-center'>
            {icon && <FaRegAddressCard className='text-orange-400 text-sm' />} <h6 className='font-semibold'>{title}</h6>
        </div>
    )
}

export default SearchLayoutHeader