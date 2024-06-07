'use client'
import { useMyProfileQuery } from "@/redux/api/baseApi"
import Loading from "./Loading"
import { redirect } from "next/navigation"

const ProtectedRoute = ({children}:any) => {
  const {error,data,isLoading} = useMyProfileQuery('')
  if(isLoading){
    return <Loading/>
  }
  if(data?.success){
    return children
  }
  if(!data || error){
    redirect('/login')
  }
  
  
}

export default ProtectedRoute