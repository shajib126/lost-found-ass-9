import Claims from "@/components/Claims";
import MyClaims from "@/components/MyClaims";
import MyFoundItems from "@/components/MyFoundItems";
import MyLostItems from "@/components/MyLostItems";
import RecentLostItems from "@/components/RecentLostItems";
import ClaimCard from "@/components/ui/ClaimCard";
import ManageProfile from "@/components/ui/ManageProfile";
import ProfileImage from "@/components/ui/ProfileImage";
import Profile from "@/utils/Profile";
import ProtectedRoute from "@/utils/ProtectedRoute";
import { useState } from "react";

const page = () => {
  

  return (
    <ProtectedRoute>
      <div className="">
        <div className="p-2 md:w-[80%] w-[95%] mx-auto mt-12 md:flex gap-4 items-center bg-[#F3F3F3] ">
          <ProfileImage/>
          <div>
            <h1>My Profile</h1>
            <Profile />
            <ManageProfile />
          </div>
        </div>
       
       <div className="mt-4">
        <h1 className="text-center font-bold text-xl">My Claims Items</h1>
        <MyClaims/>
       </div>
        <div>
          <MyLostItems/>
        </div>
        <div>
          <MyFoundItems/>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default page;
