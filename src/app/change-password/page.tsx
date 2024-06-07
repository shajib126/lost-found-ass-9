'use client'

import { useChangePasswordMutation } from "@/redux/api/baseApi"
import { logout } from "@/redux/features/auth/authSlice"
import { useAppDispatch } from "@/redux/hooks"
import { MutationError } from "@/utils/MutationError"
import ProtectedRoute from "@/utils/ProtectedRoute"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


const page = () => {
    const [changePassword] = useChangePasswordMutation()
    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [cNewPassword,setCNewPassword] = useState('')
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleSubmit = async(e:any)=>{
        e.preventDefault()
        
        try {
            const passwordInfo = {
                oldPassword,
                newPassword
            }
            if(newPassword !== cNewPassword){
                toast.error('Password does not match')
            }
            if(newPassword.length < 8){
                toast.error('Password should be more than 8 charecter')
            }
            const res = await changePassword(passwordInfo)
            const error = await MutationError(res)
            if(error){
                toast.error(error)
            }else{
                toast.success('password changed successfully')
                toast.success(`New password is ${newPassword}`)
                setOldPassword('')
                setNewPassword('')
                dispatch(logout())
                router.push('/login')
            }

        } catch (error) {

            console.log(error);
            
        }
    }
  return (
    <ProtectedRoute>
    <div className="mt-[10%]">
        <h1 className="text-center mb-4 text-xl font-bold">Change Password</h1>
        <form className="md:w-[30%] w-[90%] mx-auto  h-screen" onSubmit={handleSubmit}>
            <input className="w-full border-2 border-gray-600 p-2 rounded-md mb-8" onChange={(e)=>setOldPassword(e.target.value)} type="text" placeholder="old password" />
            <input className="w-full border-2 border-gray-600 p-2 rounded-md mb-8" onChange={(e)=>setNewPassword(e.target.value)} type="text" placeholder="new password" />
            <input className="w-full border-2 border-gray-600 p-2 rounded-md mb-8" onChange={(e)=>setCNewPassword(e.target.value)} type="text" placeholder="confirm new password" />
            <button className="w-full bg-green-800 p-2 text-white font-bold rounded-md" type="submit">Change</button>
        </form>
        </div>
    </ProtectedRoute>
  )
}

export default page