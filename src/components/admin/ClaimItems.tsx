'use client'
import { useAllClaimsQuery} from '@/redux/api/baseApi'
import Loading from '@/utils/Loading'
import React from 'react'

const ClaimItems = () => {
    const {isLoading,data} = useAllClaimsQuery('')
   
    
    
  return (
    <div className='overflow-x-auto overflow-y-auto'>
    <table className='table'>
           <thead>
            <th>#</th>
            <th>Item Name</th>
            <th>Lost Date</th>
            <th>User</th>

            </thead> 
            {isLoading ? <Loading/> : data?.data?.claims?.map((claim:any,i:number)=>(
                <tbody>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={claim?.foundItem?.images.length >= 0 ?claim?.foundItem?.images[0] : '' } alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{claim?.foundItem?.foundItemName}</div>
              <div className="text-sm opacity-50">{claim?.foundItem?.location}</div>
            </div>
          </div>
        </td>
        <td>
            <h1>{claim?.lostDate}</h1>
        </td>
        <td>
            <h1>{claim?.user?.name}</h1>
            <h1>{claim?.user?.email}</h1>
        </td>

                    </tr>
                </tbody>
            )) }
    </table>
    </div>
  )
}

export default ClaimItems