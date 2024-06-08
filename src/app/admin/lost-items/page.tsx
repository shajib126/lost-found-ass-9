import LostItems from '@/components/admin/LostItems'
import AdminNav from '@/components/ui/AdminNav'
import AdminProtectedRoute from '@/utils/AdminProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <AdminProtectedRoute>
      <div className='md:flex gap-8 md:w-[80%] mx-auto mt-8 h-screen'>
        <AdminNav/>
        <LostItems/>
      </div>
    </AdminProtectedRoute>
  )
}

export default page