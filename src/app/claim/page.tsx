import Claims from '@/components/Claims'
import ProtectedRoute from '@/utils/ProtectedRoute'
import React from 'react'

const page = () => {
    
    
  return (
    <ProtectedRoute>
        <h1 className='text-center mt-8 text-xl font-bold'>All Claims</h1>
        <Claims/>
        
    </ProtectedRoute>
  )
}

export default page