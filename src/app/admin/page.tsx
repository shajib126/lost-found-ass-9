import Home from '@/components/admin/Home'
import AdminProtectedRoute from '@/utils/AdminProtectedRoute'
import React from 'react'


const page = () => {
  return (
    <AdminProtectedRoute>
        <Home/>
    </AdminProtectedRoute>
  )
}

export default page