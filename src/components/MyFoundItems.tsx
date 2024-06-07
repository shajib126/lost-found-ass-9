'use client'

import { useFoundMyItemsQuery } from "@/redux/api/baseApi"
import Loading from "@/utils/Loading"
import FoundItemCard from "./ui/FoundItemCard"

const MyFoundItems = () => {
    const {isLoading,data} = useFoundMyItemsQuery('')

  return (
  
    <div className="w-[80%]  mx-auto mt-[100px]">
        <h1 className="font-bold text-center text-xl mb-4">My Found Items</h1>
        {isLoading ? <Loading/> : data?.data?.total <= 0 ?<h1 className="text-rose-500">Not found</h1> : <div className=" md:flex gap-20 flex-wrap">
            {data?.data?.items.slice(0,5).map((foundItem:any,i:number)=><FoundItemCard key={i} foundItem={foundItem} />)}
          </div>}
    </div>
   
  )
}

export default MyFoundItems