import Link from 'next/link'
import React from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { RiUserSettingsFill } from "react-icons/ri";


const ManageProfile = () => {
  return (
    <div className='flex flex-wrap gap-2 mt-8'>
        <Link href='/profile/edit' className='flex items-center gap-1 p-1 shadow-md rounded-md font-bold text-sm hover:bg-red-400 bg-white'><MdModeEditOutline/> Edit</Link>
        <Link className='flex items-center gap-1 p-1 shadow-md rounded-md font-bold text-sm hover:bg-red-400 bg-white' href='/change-password'><RiUserSettingsFill/> Change Password</Link>
        <Link className='bg-white rounded-md shadow-md p-1 font-bold text-sm flex items-center gap-1'  href='/setting'><CiSettings/>Setting</Link>
    </div>
  )
}

export default ManageProfile