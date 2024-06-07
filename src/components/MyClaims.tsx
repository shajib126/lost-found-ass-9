
'use client'

import { useMyClaimsQuery } from "@/redux/api/baseApi"
import Loading from "@/utils/Loading"
import ClaimCard from "./ui/ClaimCard"

const MyClaims = () => {
    const {isLoading,data} = useMyClaimsQuery('')
  return (
    
         <div className="mt-8">
        {isLoading?<Loading/> : data?.data?.length <= 0 ?<h1 className="text-rose-500"> Claim not found</h1> : <div className="w-[80%] mx-auto md:flex flex-wrap gap-4">
            {data?.data?.map((claim:any,i:number)=><ClaimCard claim={claim} />)}
        </div>}
    </div>
   
  )
}

export default MyClaims