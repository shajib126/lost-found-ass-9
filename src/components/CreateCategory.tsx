'use client'
import { useCreateCategoryMutation } from "@/redux/api/baseApi";
import { MutationError } from "@/utils/MutationError";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateCategory = () => {
  const [createCategory] = useCreateCategoryMutation();
  const [name, setName] = useState("");

  const router = useRouter();
 

  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    const categoryInfo = {
        name
    }
    try {
        const res = await createCategory(categoryInfo)
        const error = await MutationError(res)
        if(error){
            toast.error(error)
        }else{
            toast.success('Category Created successfully')
            router.push('/');
        }
    } catch (error) {
        const errorData = error as {data:{message:string}}
      toast.error(errorData.data.message)
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="md:w-[40%] mx-auto p-4">
      <label htmlFor="name">Category Name</label>
      <input
        onChange={(e)=>setName(e.target.value)}
        className="p-2 border-2 border-gray-600 w-full rounded-sm mb-8 mt-8"
        type="text"
        placeholder="Category Name"
      />
      <button type="submit" className="bg-green-500 p-2 rounded-md w-full">
        Create Category
      </button>
    </form>
  );
};

export default CreateCategory;
