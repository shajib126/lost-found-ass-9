'use client'
import { useMyProfileQuery } from "@/redux/api/baseApi"
import Loading from "./Loading"
import { redirect } from "next/navigation"

const ProtectedRoute = ({children}:any) => {
  const {error,data,isLoading} = useMyProfileQuery('')

 
 
 
  
  
  if(isLoading){
    return <Loading/>
  }
  if(data?.success && data?.data?.role == 'user'){
    return children
  }
  if(data?.success &&  data?.data?.role == 'admin'){
    redirect('/admin')
  }
  if(!data || error){
    redirect('/login')
  }
  
  
}

export default ProtectedRoute