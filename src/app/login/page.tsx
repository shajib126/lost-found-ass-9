'use client'
import { useMyProfileQuery, useUserLoginMutation } from '@/redux/api/baseApi'
import { setProfile, setUser } from '@/redux/features/auth/authSlice'
import { useAppDispatch } from '@/redux/hooks'
import { MutationError } from '@/utils/MutationError'
import { verifyToken } from '@/utils/verifyToken'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  


  const [userLogin] = useUserLoginMutation()
  const {error,data} = useMyProfileQuery('')


  const dispatch = useAppDispatch()
  const router = useRouter()


  const handleLogin = async(e:React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    const userInfo = {
      email,
      password
    }
    try {
      const res = await userLogin(userInfo)
      
      
      const error = await MutationError(res)
      if(error){
        toast.error(error)
        setLoading(false)
      }else{
        const user = await verifyToken(res?.data?.data?.data?.accessToken)
        
        dispatch(setUser({user,token:res?.data?.data?.data?.accessToken}))
        toast.success('Logged in successfully')
        router.push('/')
       
      }
    } catch (error) {
      const errorData = error as {data:{message:string}}
      toast.error(errorData.data.message)
     setLoading(false)
      
    }
  }
  return (
    <div className='h-screen'>
    <form onSubmit={handleLogin} className=' md:w-[30%] w-[80%] mx-auto mt-[5%] '>
        <h1 className='text-center font-bold text-2xl mb-4 '>Lost and Found Hub</h1>
        <hr />
        <h1 className='text-center font-bold text-xl mb-12 mt-4'>Login</h1>
        <div className='mb-8'>
            <label htmlFor="Email">Email Or User Name</label>
            <input onChange={(e)=>setEmail(e.target.value)} className='border-2 rounded-sm p-1 w-full' type="email" placeholder='example@gmail.com / usename' />
        </div>
        <div>
            <label htmlFor="Password">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} className='border-2 rounded-sm p-1 w-full' type="password" placeholder='*****' />
        </div>
        <button type='submit' className="hover:bg-gray-900 mt-8 w-full btn btn-neutral">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            'Login'
          )}
        </button>
        <div className='mt-8 flex gap-1 justify-center'>
        <p>Don't have account? </p>
           <Link className='font-bold hover:text-gray-600' href='/sign-up'>Sign-Up</Link> 
        </div>
    </form>
    </div>
  )
}

export default page