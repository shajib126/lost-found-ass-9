"use client";

import { useDeactiveUserMutation, useUsersQuery } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";
import { MutationError } from "@/utils/MutationError";
import { useState } from "react";
import toast from "react-hot-toast";

const Users = () => {
  const { isLoading, data } = useUsersQuery("");
  const [deactive] = useDeactiveUserMutation();
  const [userId, setUserId] = useState(null);
  const [deactivated, setDeactivated] = useState<null | string>(null);

  
  
  const hanldeDeactiveSubmit = async (e: any) => {
    e.preventDefault();
    const userInfo = {
      id: userId,
      deactivated
    };
 
    
    try {
      if(!deactivated){
        toast.error('Action is required')
      }
      const res = await deactive(userInfo)
      const error = await MutationError(res)
      if(error){
        toast.error(error)
      }else{
        toast.success('Action Done')
        setUserId(null)
      }
    } catch (error) {
      const errorData = error as {data:{message:string}}
      toast.error(errorData.data.message)
      console.log(error);
    }
    
  };

  return (
    <div>
      <h1 className="text-center text-rose-500">
        Total User : {isLoading ? <Loading /> : data?.data?.total}
      </h1>
      {data?.data?.users?.map((user: any, i: number) => (
        <div key={i}>
          <div className="flex gap-8 p-2 items-center">
            <h1>#{i + 1}</h1>
            <img
              className="w-[50px] h-[50px]"
              src={
                user?.profile?.image
                  ? user?.profile?.image
                  : "https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
              }
              alt=""
            />
            <div>
              <h1 className="flex flex-col">
                {user?.name}{" "}
                <span
                  className={
                    user?.deactivated
                      ? "text-red-600 flex gap-2"
                      : "text-green-700 flex gap-2"
                  }
                >
                  {user?.deactivated ? "deactive" : "active"}
                  <button
                    onClick={() => setUserId(user.id)}
                    className={
                      user?.deactivated
                        ? "bg-green-500 text-black rounded-md px-2"
                        : "bg-red-500 text-black rounded-md px-2"
                    }
                  >
                    {user?.deactivated ? "active user" : "deactive user"}
                  </button>
                </span>{" "}
              </h1>
              <h1>{user?.email}</h1>
            </div>
          </div>
        </div>
      ))}
      {userId && (
        <form
          onSubmit={hanldeDeactiveSubmit}
          className="md:w-[20%] bg-gray-500 p-4 absolute top-[10%]"
        >
          <h1>Active / Deactive </h1>
          <input
            className="border-2 w-full mb-8 p-2"
            type="text"
            value={userId!}
          />
          <select onChange={(e)=>setDeactivated(e.target.value)} className="border-2 w-full p-2 mb-8">
            <option value="">Action</option>
            <option value="true">Deactivate</option>
            <option value="false">Active</option>
          </select>
          <div className="flex justify-between">
            <button type="submit" className="bg-green-500 p-1 rounded-sm">
              Save Change
            </button>
            <button className="bg-red-500 p-1 rounded-sm text-white" onClick={() => setUserId(null)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Users;
