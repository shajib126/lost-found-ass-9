'use client'
import RecentLostItemsCard from '@/components/ui/RecentLostItemsCard'
import { useLostItemsQuery } from '@/redux/api/baseApi'
import Loading from '@/utils/Loading'
import React from 'react'

const page = () => {
    const {isLoading,data} = useLostItemsQuery('')
  return (
    <div className="mt-20">
      <h1 className="text-center text-xl font-bold mb-4">Recent Lost Item Reports</h1>
      <div className="w-[80%] mx-auto ">
        {isLoading ? <Loading/> : data?.data?.length <= 0 ?<h1>Lost items not found</h1> :
        <div className=" md:flex gap-20 flex-wrap"> 
          {data?.data?.items.map((lostItem:any,i:number)=><RecentLostItemsCard key={i} lostItem={lostItem} />)}
        </div>
        }
        
        
      </div>
      
      
    </div>
  )
}

export default page