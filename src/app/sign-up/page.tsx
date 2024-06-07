'use client'
import { useUserRegistrationMutation } from '@/redux/api/baseApi'
import { matchPassword } from '@/utils/MatchPassword'
import { MutationError } from '@/utils/MutationError'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const [confirmPassword,setConfirmPassword] = useState('')
    const [userRegistration] = useUserRegistrationMutation()
    const router = useRouter()

    const registerHandler = async(e:React.FormEvent)=>{
        
        e.preventDefault()
       const match = matchPassword(password,confirmPassword)
       const userInfo = {
        name,
        email,
        password,
       profile:{
        bio:'bio',
        age:1
       }
       }
       try {
        if(match){
            const res =await userRegistration(userInfo)
            const error = await MutationError(res)
            if(error){
                toast.error(error)
            }else{
                toast.success('User registered successfully')
                router.push('/login')
            }
             
            
        }
       } catch (error) {
            alert(error)
       }
       
        
    }
  return (
    <div className='h-screen'>
    <form onSubmit={registerHandler} className=' md:w-[30%] w-[80%] mx-auto mt-[5%] '>
        <h1 className='text-center font-bold text-2xl mb-4 '>Lost and Found Hub</h1>
        <hr />
        <h1 className='text-center font-bold text-xl mb-12 mt-4'>Registration</h1>
        <div className='mb-8'>
            <label htmlFor="Name">Name</label>
            <input onChange={(e)=>setName(e.target.value)} required className='border-2 rounded-sm p-1 w-full' type="text" placeholder='name' />
        </div>
        
        <div className='mb-8'>
            <label htmlFor="Email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} required className='border-2 rounded-sm p-1 w-full' type="email" placeholder='example@gmail.com' />
        </div>
        <div className='mb-8'>
            <label htmlFor="Password">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} required className='border-2 rounded-sm p-1 w-full' type="password" placeholder='*****' />
        </div>
        <div className='mb-8'>
            <label htmlFor="Confirm password">Confirm Password</label>
            <input onChange={(e)=>setConfirmPassword(e.target.value)} required className='border-2 rounded-sm p-1 w-full' type="password" placeholder='******' />
        </div>
        <button type='submit' className="hover:bg-gray-900 mt-8 w-full btn btn-neutral">Sign Up</button>
        <div className='mt-8 flex gap-1 justify-center'>
        <p>Already have an account? </p>
           <Link className='font-bold hover:text-gray-600' href='/login'>Sign-In</Link> 
        </div>
    </form>
    </div>
  )
}

export default page