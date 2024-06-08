'use client'
import { useLostItemsQuery } from '@/redux/api/baseApi'
import Loading from '@/utils/Loading'
import React from 'react'

const LostItems = () => {
    const {isLoading,data} = useLostItemsQuery('')
  return (
    <div className='overflow-x-auto'>
    <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>brand</th>
                <th>Is Found</th>
                <th>User</th>
            </tr>
        </thead>
      
    
        
        {isLoading ? <Loading/> : data?.data?.items?.map((lostItem:any,i:number)=>
        <tbody>
            <tr>
                <td>
                    <h1>{i+1}</h1>
                </td>
        <td>
           
          <div className="flex items-center gap-3">

            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={lostItem?.images.length >= 0 ? lostItem?.images[0] : '' } alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{lostItem?.lostItemName}</div>
              <div className="text-sm opacity-50">{lostItem?.location}</div>
              <div className="text-sm opacity-50">PC:{lostItem?.primaryColor}</div>
              <div className="text-sm opacity-50">SC:{lostItem?.secondayColor}</div>
            </div>
          </div>
          
        </td>
        <td>
            <h1>{lostItem?.brand}</h1>
        </td>
        <td>
            <h1>{lostItem?.isFound ? 'found' : 'not found'}</h1>
            
        </td>
        <td>
        <h1>{lostItem?.user?.name}</h1>
        <h1>{lostItem?.user?.email}</h1>
            
        </td>
       
       
        </tr>
        </tbody>
        )}
        
        
    </table>
    </div>
  )
}

export default LostItems