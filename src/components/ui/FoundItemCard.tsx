
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiCategory } from 'react-icons/bi';
import { FaLocationArrow } from 'react-icons/fa';
import { IoColorFill } from 'react-icons/io5';
import { MdBrandingWatermark, MdOutlineSubtitles } from 'react-icons/md';

const FoundItemCard = ({foundItem}:any) => {
  const router = useRouter()
  const handleClaim = (id:string) => {
    router.push(`/claim/${id}`);
  };
   
    
  return (
    <div className="md:w-[20%] w-[100%] md:mx-0 mx-auto mb-4 shadow-md p-2 rounded-md bg-green-300">
        
        
            <img
              className="h-[200px] w-full"
              src={
                foundItem?.images.length > 0
                  ? foundItem?.images[0]
                  : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
              }
              alt=""
            />
            <div className="mt-8 px-4">
              <h1 className="font-bold flex gap-2 items-center ">
                <MdOutlineSubtitles />

                {foundItem?.foundItemName}
              </h1>
              <div className="flex justify-between">
              
                <h1 className="flex items-center gap-2 font-bold">
                <FaLocationArrow />
                Location
                </h1>
                <h1>
                {foundItem?.location}

                </h1>

              
              </div>
             
              <div className="flex justify-between">
                <h1 className="font-bold flex items-center gap-2"><MdBrandingWatermark/>Brand</h1>
                <h1>
                  {foundItem?.brand}
                </h1>
              </div>
              <div className="flex justify-between ">
                <h1 className="font-bold flex items-center gap-2"><BiCategory/>Category</h1>
                <h1>{foundItem?.category?.name}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="flex gap-1 items-center font-bold">
                    
                    <IoColorFill/>
                    primary
                </h1>
                <h1>{foundItem?.primaryColor}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="flex gap-1 items-center font-bold">
                    
                    <IoColorFill/>
                    secondary
                </h1>
                <h1>{foundItem?.secondayColor}</h1>
              </div>
            </div>
            <button onClick={()=>handleClaim(foundItem?.id)} className=" w-full mt-8 p-2 bg-green-500  hover:bg-green-600 rounded-md">Claim</button>
        
    
      </div>
  )
}

export default FoundItemCard