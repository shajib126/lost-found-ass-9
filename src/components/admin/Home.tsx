"use client";
import React from "react";
import AdminNav from "../ui/AdminNav";
import {
  useAllClaimsQuery,
  useFoundItemsQuery,
  useLostItemsQuery,
  useUsersQuery,
} from "@/redux/api/baseApi";
import Link from "next/link";

const Home = () => {
  const { isLoading: userLoading, data: userData } = useUsersQuery("");
  const { isLoading: lostItemLoading, data: lostData } = useLostItemsQuery("");
  const { isLoading: foundLoading, data: foundData } = useFoundItemsQuery("");
  const { isLoading: allClaimLoading, data: allClaimData } =
    useAllClaimsQuery("");
  console.log(userData, lostData, foundData, allClaimData);

  return (
    <div className="md:flex gap-8 md:w-[100%] mx-auto mt-0 md:h-screen">
      <AdminNav />
      <div className="w-[90%] mx-auto md:p-2 mt-4 md:flex flex-wrap gap-4">
        <div className="admin-home bg-black text-white ">
          <h1 className="font-bold text-2xl">Total User</h1>
          <h1 className="text-center mt-4 text-xl font-bold mb-8">
            {userData?.data?.total}
          </h1>
          <div className="w-[80%] md:w-[50%]  mx-auto bg-gray-600 p-1 rounded-md text-center">
            <Link className="" href="/admin/user">
              All Users
            </Link>
          </div>
        </div>
        <div className="admin-home bg-green-500">
          <h1 className="font-bold text-2xl">Total Found Items</h1>
          <h1 className="text-center mt-4 text-xl font-bold mb-8">
            {foundData?.data?.total}
          </h1>
          <div className="w-[80%] md:w-[50%]  mx-auto bg-green-700 p-1 rounded-md text-center text-white">
            <Link className="" href="/admin/found-items">
              Found Items
            </Link>
          </div>
        </div>
        <div className="admin-home bg-rose-500">
          <h1 className="font-bold text-2xl">Total Lost Items</h1>
          <h1 className="text-center mt-4 text-xl font-bold mb-8">
            {lostData?.data?.total}
          </h1>
          <div className="w-[80%] md:w-[50%]  mx-auto bg-rose-700 p-1 rounded-md text-white text-center">
            <Link className="" href="/admin/lost-items">
              Lost Items
            </Link>
          </div>
        </div>
        <div className="admin-home bg-blue-900 text-white ">
          <h1 className="font-bold text-2xl">Total Claim Items</h1>
          <h1 className="text-center mt-4 text-xl font-bold mb-8">
            {allClaimData?.data?.total}
          </h1>
          <div className="w-[80%] md:w-[50%]  mx-auto bg-blue-950 p-1 rounded-md shadow-md text-center">
            <Link className="" href="/admin/claim-items">
              All Claims
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
