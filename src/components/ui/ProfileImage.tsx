'use client'
import { useMyProfileQuery } from '@/redux/api/baseApi'
import Loading from '@/utils/Loading'
import React from 'react'

const ProfileImage = () => {
    const {data,error,isLoading} = useMyProfileQuery('')
  return (
   <> 
        {isLoading ? <Loading/> : <img
            className="md:w-[200px] w-full rounded-md h-[200px]"
            src={data?.data?.profile?.image ?data?.data?.profile?.image  : "https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg"}
            alt=""
          />}
   </>
  )
}

export default ProfileImage