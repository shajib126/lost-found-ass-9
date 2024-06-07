'use client'
import { useCreateClaimsMutation } from "@/redux/api/baseApi"
import { MutationError } from "@/utils/MutationError"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

const ClaimForm = ({id}:{id:string}) => {
  const [createClaim] = useCreateClaimsMutation()
  const [distinguishingFeatures,setDistinguishingFeatures] = useState('')
  const [lostDate,setLostDate] = useState('')
  const router = useRouter()

  const submitHandle = async(e:any)=>{
    e.preventDefault()
    const claimInfo = {
      foundItemId:id,
      distinguishingFeatures,
      lostDate
    }

    try {
      if(!distinguishingFeatures && !lostDate){
        toast.error('All field are required')
      }
      const res = await createClaim(claimInfo)
      const error = await MutationError(res)
      if(error){
        toast.error(error)
      }else{
        toast.success('Claimed successfully')
        setDistinguishingFeatures('')
        setLostDate('')
        router.push('/claim')
      }
    } catch (error) {
      const errorData = error as {data:{message:string}}
      toast.error(errorData.data.message)
      console.log(error);
      
    }
  }
  return (
    <form onSubmit={submitHandle}>
        <input type="text" value={id} className="w-full border-2 border-gray-600 rounded-md p-2 mb-8" />
        <input className="border-2 border-gray-600 p-2 w-full rounded-md mb-8" onChange={(e)=>setDistinguishingFeatures(e.target.value)} type="text" placeholder="Distinguishing Features" />
        <div>
          <label htmlFor="">Lost Date</label>
        <input className="w-full border-2 p-2 border-gray-600 rounded-md mb-8" onChange={(e)=>setLostDate(e.target.value)} type="date"  />

        </div>
        <button className="w-full border-2 p-2 bg-green-700 rounded-md text-xl text-white" type="submit">Claim</button>
     
    </form>
  )
}

export default ClaimForm