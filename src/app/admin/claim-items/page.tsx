import ClaimItems from '@/components/admin/ClaimItems'
import AdminNav from '@/components/ui/AdminNav'
import AdminProtectedRoute from '@/utils/AdminProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <AdminProtectedRoute>
      <div className='md:flex gap-8 md:w-[80%] w-full mx-auto mt-8 h-screen'>
        <AdminNav/>
        <ClaimItems/>
      </div>
    </AdminProtectedRoute>
  )
}

export default page