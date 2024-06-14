"use client";

import { useMyProfileQuery } from "@/redux/api/baseApi";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useState } from "react";
import Loading from "./Loading";

const ProfileQuery = () => {
  const { error, isLoading, data } = useMyProfileQuery("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();

 
  return (
    <div className="">
      {isLoading ? <Loading/> : data?.success ? (
        <img
          onClick={()=>setToggle(!toggle)}
          className="w-[50px] h-[50px] rounded-md"
          src={
            data?.data?.profile?.image
              ? data?.data?.profile?.image
              : "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
          }
          alt=""
        />
      ):<Link className="btn" href="/login">
      Login
    </Link>}
    {toggle &&<div className="flex flex-col   ">
        <button onClick={() => dispatch(logout())} className="btn">
          Logout
        </button>

        <Link className="text-center bg-white p-2 rounded-md mt-3" href={data?.data?.role == 'user' ? '/profile' : '/admin'}>{data?.data?.role == 'user' ? 'Profile' : 'Dashboard'}</Link>
        
      </div> }
      
    </div>
  );
};

export default ProfileQuery;
