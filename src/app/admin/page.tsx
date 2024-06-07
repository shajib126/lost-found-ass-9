import AdminProtectedRoute from '@/utils/AdminProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <AdminProtectedRoute>
        <h1>Admin</h1>
    </AdminProtectedRoute>
  )
}

export default page