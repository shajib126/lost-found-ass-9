'use client'
import RecentLostItemsCard from '@/components/ui/RecentLostItemsCard'
import { useLostItemsQuery } from '@/redux/api/baseApi'
import Loading from '@/utils/Loading'
import React, { useState } from 'react'
import { IoFilterSharp } from "react-icons/io5";


const page = () => {
  const [filterToggle,setFilterToggle] = useState(false)
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [orderBy, setOrderBy] = useState('desc');
  const [lostItemName,setLostItemName] = useState('')
    const {isLoading,data} = useLostItemsQuery({ lostItemName,page, limit, orderBy })


    const handlePageChange = (event:any) => {
      setPage(Number(event.target.value));
    };
  return (
    <div className="bg-rose-300 p-4">
      <h1 className="text-center text-xl font-bold mb-4">Recent Lost Item Reports</h1>
       {/* filtering */}
       <div className='w-[80%] mx-auto'>
        <small>Open filter</small>
       <IoFilterSharp onClick={()=>setFilterToggle(!filterToggle)} className='text-2xl font-bold' />
       </div>
       
       {filterToggle &&  <div className="flex w-[80%] flex-wrap mx-auto mt-2 gap-2 mb-4 p-2">
      <div>
        
        <input className="border-2 border-gray-500 rounded-md p-1" type="text" placeholder="search by title"  onChange={(e)=>setLostItemName(e.target.value)} />
      </div>
      <div className="border-2 border-gray-500 rounded-md">
        <label>Order By: </label>
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>
      </div>
      <div>
        <label>Limit: </label>
        <input className="border-2 border-gray-600 w-[100px] p-1 rounded-md" type="number" value={limit} onChange={(e) => setLimit(Number(e.target.value))} min="1" />
      </div>
    </div>}

      
      {/* filtering */}
      <div className="w-[80%] mx-auto ">
        {isLoading ? <Loading/> : data?.data?.length <= 0 ?<h1>Lost items not found</h1> :
        <div className=" md:flex gap-20 flex-wrap "> 
          {data?.data?.items.map((lostItem:any,i:number)=><RecentLostItemsCard key={i} lostItem={lostItem} />)}
        </div>
        }
        
        
      </div>
      
       {/* pagination */}
      
       <div className="w-[20%] mx-auto">
        <label>Page : </label>
        <input className="border-2 border-gray-600 w-[100px]" type="number" value={page} onChange={handlePageChange} min="1" />
      </div>
      
      
      {/* pagination */}
    </div>
  )
}

export default page