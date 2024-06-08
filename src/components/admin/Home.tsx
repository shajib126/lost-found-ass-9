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
    <div className="md:flex gap-8 md:w-[80%] mx-auto mt-8 h-screen">
      <AdminNav />
      <div className="w-[90%] mx-auto p-2 md:flex flex-wrap gap-4">
        <div className="admin-home">
          <h1 className="font-bold text-2xl">Total User</h1>
          <h1 className="text-center mt-4 text-xl font-bold mb-8">
            {userData?.data?.total}
          </h1>
          <div className="w-[80%] md:w-[50%]  mx-auto bg-gray-300 text-center">
            <Link className="" href="/admin/user">
              All Users
            </Link>
          </div>
        </div>
        <div className="admin-home">
          <h1 className="font-bold text-2xl">Total Found Items</h1>
          <h1 className="text-center mt-4 text-xl font-bold mb-8">
            {foundData?.data?.total}
          </h1>
          <div className="w-[80%] md:w-[50%]  mx-auto bg-gray-300 text-center">
            <Link className="" href="/admin/found-items">
              Found Items
            </Link>
          </div>
        </div>
        <div className="admin-home">
          <h1 className="font-bold text-2xl">Total Lost Items</h1>
          <h1 className="text-center mt-4 text-xl font-bold mb-8">
            {lostData?.data?.total}
          </h1>
          <div className="w-[80%] md:w-[50%]  mx-auto bg-gray-300 text-center">
            <Link className="" href="/admin/lost-items">
              Lost Items
            </Link>
          </div>
        </div>
        <div className="admin-home">
          <h1 className="font-bold text-2xl">Total Claim Items</h1>
          <h1 className="text-center mt-4 text-xl font-bold mb-8">
            {allClaimData?.data?.total}
          </h1>
          <div className="w-[80%] md:w-[50%]  mx-auto bg-gray-300 text-center">
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
