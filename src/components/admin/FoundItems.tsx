'use client'
import { useFoundItemsQuery, useLostItemsQuery } from '@/redux/api/baseApi'
import Loading from '@/utils/Loading'
import React from 'react'

const FoundItems = () => {
    const {isLoading,data} = useFoundItemsQuery('')
  return (
    <div className='overflow-x-auto'>
    <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>brand</th>
                
                <th>User</th>
            </tr>
        </thead>
      
    
        
        {isLoading ? <Loading/> : data?.data?.items?.map((foundItem:any,i:number)=>
        <tbody>
            <tr>
                <td>
                    <h1>{i+1}</h1>
                </td>
        <td>
           
          <div className="flex items-center gap-3">

            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={foundItem?.images.length >= 0 ? foundItem?.images[0] : '' } alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{foundItem?.foundItemName}</div>
              <div className="text-sm opacity-50">{foundItem?.location}</div>
              <div className="text-sm opacity-50">PC:{foundItem?.primaryColor}</div>
              <div className="text-sm opacity-50">SC:{foundItem?.secondayColor}</div>
            </div>
          </div>
          
        </td>
        <td>
            <h1>{foundItem?.brand}</h1>
        </td>
        
        <td>
        <h1>{foundItem?.user?.name}</h1>
        <h1>{foundItem?.user?.email}</h1>
            
        </td>
       
       
        </tr>
        </tbody>
        )}
        
        
    </table>
    </div>
  )
}

export default FoundItems