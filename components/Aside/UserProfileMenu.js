import { Dropdown } from 'antd'
import React from 'react'

import {
  FaRegUserCircle,
  FaSignOutAlt,
  FaChevronDown,
  FaUserCircle,
} from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
const UserProfileMenu = () => {
  //hook
  const dispatch = useDispatch()
  // const { user } = useSelector(state => state.authReducer)
  const MyAccountOpen = () => {
    // dispatch({ type: MYACCOUNT_MODAL, payload: true })
  }

  const items = [
    {
      key: "1",
      label: (
        <div onClick={MyAccountOpen} className='flex gap-2 items-center'>
          <FaRegUserCircle size={14} />
          My Account
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <Link href={"/logout"} >
          <span className='flex gap-2 items-center'>
            <FaSignOutAlt size={14} /> Logout
          </span>

        </Link>
      ),
    },
  ];



  return (
    <div className='px-2'>
      <Dropdown
        menu={{ items }}
        placement="topRight"
        arrow
        trigger={['click']}
      >
        <div className="flex items-center justify-content-center user-select-none ">
          <div className="avtar flex cursor-pointer  items-center gap-2 justify-content-center rounded-pill me-1 ">
            <h6>Baliram Giri</h6>
            <FaChevronDown className='mb-1' size={14} />
          </div>
        </div>
      </Dropdown>
    </div>
  )
}

export default UserProfileMenu