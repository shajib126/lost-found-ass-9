'use client'
import { useMyProfileQuery } from '@/redux/api/baseApi'
import { redirect } from 'next/navigation'
import React from 'react'
import Loading from './Loading'

const AdminProtectedRoute = ({children}:any) => {
    const {error,data,isLoading} = useMyProfileQuery('')
    if(isLoading){
        return <Loading/>
    }
    if(data?.success && data?.data?.role == 'user'){
        redirect('/profile')
    }
    if(data?.success && data?.data?.role == 'admin'){
        return children
      }
      if(!data || error){
        redirect('/login')
      }
}

export default AdminProtectedRoute