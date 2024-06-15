"use client";
import { useFoundItemsQuery } from "@/redux/api/baseApi";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineSubtitles } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdBrandingWatermark } from "react-icons/md";

import { IoColorFill, IoFilterSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const page = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [orderBy, setOrderBy] = useState("desc");
  const [foundItemName, setFoundItemName] = useState("");

  const { isLoading, data } = useFoundItemsQuery({
    foundItemName,
    page,
    limit,
    orderBy,
  });
  const router = useRouter();
  const handleClaim = (id: string) => {
    router.push(`/claim/${id}`);
  };

  const handlePageChange = (event: any) => {
    setPage(Number(event.target.value));
  };

  return (
    <div className="p-4 bg-green-300">
      <h1 className="text-center font-bold text-2xl">Found Items</h1>

      {/* filtering */}
      <div className="w-[80%] mx-auto">
        <small>Open filter</small>
        <IoFilterSharp
          onClick={() => setFilterToggle(!filterToggle)}
          className="text-2xl font-bold"
        />
      </div>

      {filterToggle && (
        <div className="flex w-[80%] flex-wrap mx-auto mt-2 gap-2">
          <div>
            <input
              className="border-2 border-gray-500 rounded-md p-1"
              type="text"
              placeholder="search by title"
              onChange={(e) => setFoundItemName(e.target.value)}
            />
          </div>
          <div className="border-2 border-gray-500 rounded-md">
            <label>Order By: </label>
            <select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="desc">Desc</option>
              <option value="asc">Asc</option>
            </select>
          </div>
          <div>
            <label>Limit: </label>
            <input
              className="border-2 border-gray-600 w-[100px] p-1 rounded-md"
              type="number"
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              min="1"
            />
          </div>
        </div>
      )}

      {/* filtering */}
      <div className=" flex flex-wrap gap-8 mt-[50px] w-[80%] mx-auto">
        {data?.data?.items?.map((foundItem: any, i: number) => (
          <div className="md:w-[20%] w-[90%] bg-green-400 p-4 md:mx-0 mx-auto shadow-sm rounded-md shadow-gray-200 ">
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
                <h1>{foundItem?.location}</h1>
              </div>

              <div className="flex justify-between">
                <h1 className="font-bold flex items-center gap-2">
                  <MdBrandingWatermark />
                  Brand
                </h1>
                <h1>{foundItem?.brand}</h1>
              </div>
              <div className="flex justify-between ">
                <h1 className="font-bold flex items-center gap-2">
                  <BiCategory />
                  Category
                </h1>
                <h1>{foundItem?.category?.name}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="flex gap-1 items-center font-bold">
                  <IoColorFill />
                  primary
                </h1>
                <h1>{foundItem?.primaryColor}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="flex gap-1 items-center font-bold">
                  <IoColorFill />
                  secondary
                </h1>
                <h1>{foundItem?.secondayColor}</h1>
              </div>
            </div>
            <button
              onClick={() => handleClaim(foundItem?.id)}
              className="hover:bg-green-400 w-full mt-8 p-2 bg-green-500"
            >
              Claim
            </button>
          </div>
        ))}
      </div>

      {/* pagination */}

      <div className="w-[20%] mx-auto">
        <label>Page : </label>
        <input
          className="border-2 border-gray-600 w-[100px]"
          type="number"
          value={page}
          onChange={handlePageChange}
          min="1"
        />
      </div>

      {/* pagination */}
    </div>
  );
};

export default page;
