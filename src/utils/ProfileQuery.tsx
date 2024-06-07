'use client'

import { useMyProfileQuery } from "@/redux/api/baseApi"
import { logout } from "@/redux/features/auth/authSlice"
import { useAppDispatch } from "@/redux/hooks"
import Link from "next/link"

const ProfileQuery = () => {
    const {error,isLoading,data} = useMyProfileQuery('')
    const dispatch = useAppDispatch()
  return (
    <div>
        {data?.success ? <button onClick={()=>dispatch(logout())} className="btn">Logout</button>:<Link className="btn" href='/login'>Login</Link>}
    </div>
  )
}

export default ProfileQuery