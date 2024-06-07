'use client'
import { useMyProfileQuery } from '@/redux/api/baseApi'


const Profile = () => {
    const {data,error,isLoading} = useMyProfileQuery('')
    
    
    
  return (
    <div>
        <h1>Name: {data?.data?.name}</h1>
        <h1>Email: {data?.data?.email}</h1>
    </div>
  )
}

export default Profile