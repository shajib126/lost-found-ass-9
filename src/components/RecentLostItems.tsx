'use client'
import { useLostItemsQuery } from "@/redux/api/baseApi";
import RecentLostItemsCard from "./ui/RecentLostItemsCard";
import Loading from "@/utils/Loading";
import Link from "next/link";

const RecentLostItems = () => {
  const {isLoading,data} = useLostItemsQuery('')
  
  
  return (
    <div className="mt-20">
      <h1 className="text-center text-xl font-bold mb-4">Recent Lost Item Reports</h1>
      <div className="w-[80%] mx-auto ">
        {isLoading ? <Loading/> : data?.data?.length <= 0 ?<h1>Lost items not found</h1> :
        <div className=" md:flex gap-20 flex-wrap"> 
          {data?.data?.items.slice(0,5).map((lostItem:any,i:number)=><RecentLostItemsCard key={i} lostItem={lostItem} />)}
        </div>
        }
        
        
      </div>
      <div className="md:w-[10%]  w-[30%] mx-auto mt-8">
      <Link className="rounded-md  p-2 bg-gray-500 text-white" href='/lost-items'>All Lost Items</Link>
      </div>
      
    </div>
  );
};

export default RecentLostItems;
