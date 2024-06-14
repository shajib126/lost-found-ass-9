'use client'
import { useFoundItemsQuery } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";
import FoundItemCard from "./ui/FoundItemCard";
import Link from "next/link";

const RecentFoundItems = () => {
    const { isLoading,data } = useFoundItemsQuery("");
  return (
    <div className="bg-green-200 p-8 mt-[100px]">
    <div className="md:w-[80%] w-full  mx-auto ">
        <h1 className="font-bold text-center text-xl mb-4">Recent Found Items</h1>
        {isLoading ? <Loading/> : <div className=" md:flex gap-20 flex-wrap">
            {data?.data?.items.slice(0,5).map((foundItem:any,i:number)=><FoundItemCard key={i} foundItem={foundItem} />)}
          </div>}
    </div>
    <div className="md:w-[10%] mx-auto">
      <Link href='/found-items' className="bg-green-500 p-2 rounded-md text-white shadow-md mt-4">All Found Items</Link>
    </div>
    </div>
  )
}

export default RecentFoundItems