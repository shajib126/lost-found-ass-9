'use client'

import { useAllClaimsQuery } from "@/redux/api/baseApi"
import Loading from "@/utils/Loading"
import ClaimCard from "./ui/ClaimCard"

const Claims = () => {
    const {isLoading,data} = useAllClaimsQuery('')
  
    
    
  return (
    <div className="mt-8">
        {isLoading?<Loading/> : data?.data?.length <= 0 ?<h1 className="text-rose-500"> Claim not found</h1> : <div className="w-[80%] mx-auto md:flex flex-wrap gap-4">
            {data?.data?.map((claim:any,i:number)=><ClaimCard key={i} claim={claim} />)}
        </div>}
    </div>
  )
}

export default Claims