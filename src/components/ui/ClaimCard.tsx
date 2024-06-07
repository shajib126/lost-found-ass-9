import React from "react";

const ClaimCard = ({ claim }: { claim: any }) => {


  return (
    <div className="mb-4 md:w-[30%] w-[90%] md:mx-0 mx-auto  shadow-md rounded-md p-2">
      <img
        className="w-full h-[180px]"
        src={claim?.foundItem?.images![0]}
        alt=""
      />

      <div className="p-2">
      <div className="flex justify-between">
          <h1>Item Name</h1>
          <h1>{claim?.foundItem?.foundItemName}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Lost Date</h1>
          <h1>{claim?.lostDate}</h1>
        </div>
      <div className="flex justify-between">
          <h1>Status</h1>
          <h1>{claim?.status}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Features</h1>
          <h1>{claim?.distinguishingFeatures}</h1>
        </div>
        
      </div>
    </div>
  );
};

export default ClaimCard;
