import Link from 'next/link'
import React from 'react'

const AdminNav = () => {
  return (
    <nav className=' flex md:flex-col flex-wrap p-2'>
        <Link className='admin-nav' href='/admin'>Home</Link>
        <Link className='admin-nav' href='/admin/user'>User</Link>
        <Link className='admin-nav' href='/admin/lost-items'>Lost Items</Link>
        <Link className='admin-nav' href='/admin/found-items'>Found Items</Link>
        <Link className='admin-nav' href='/admin/claim-items'>Claim Items</Link>
    </nav>
  )
}

export default AdminNav