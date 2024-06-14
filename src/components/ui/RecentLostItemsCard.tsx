import { BiCategory } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { IoColorFill } from "react-icons/io5";
import { MdBrandingWatermark, MdOutlineSubtitles } from "react-icons/md";

export type TLostItem = {
  lostItem: {
    id: string;
    userId: string;
    lostItemName: string;
    categoryId: string;
    brand: string;
    primaryColor?: string;
    secondayColor?: string;
    lostDate: Date;
    location: String;
    isFound: boolean;
    phone: string;
    email: string;
    images?: string[];
    user: any;
    category: { id: string; name: string };
  };
};

const RecentLostItemsCard = ({ lostItem }: TLostItem) => {
  return (
    <div className="md:w-[20%] w-full md:mx-0 mx-auto mb-4 shadow-md p-2 rounded-md text-black bg-rose-300">
      <img
        className="h-[200px] w-full"
        src={
          lostItem?.images!?.length > 0
            ? lostItem?.images![0]
            : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
        }
        alt=""
      />
      <div className="mt-8 px-4">
        <h1 className="font-semibold flex gap-2 items-center ">
          <MdOutlineSubtitles />

          {lostItem?.lostItemName}
        </h1>
        <div className="flex justify-between">
          <h1 className="flex items-center gap-2 font-semibold">
            <FaLocationArrow />
            Location
          </h1>
          <h1>{lostItem?.location}</h1>
        </div>

        <div className="flex justify-between">
          <h1 className="font-semibold flex items-center gap-2">
            <MdBrandingWatermark />
            Brand
          </h1>
          <h1>{lostItem?.brand}</h1>
        </div>
        <div className="flex justify-between ">
          <h1 className="font-semibold flex items-center gap-2">
            <BiCategory />
            Category
          </h1>
          <h1>{lostItem?.category?.name}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="flex gap-1 items-center font-semibold">
            <IoColorFill />
            primary
          </h1>
          <h1>{lostItem?.primaryColor}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="flex gap-1 items-center font-semibold">
            <IoColorFill />
            secondary
          </h1>
          <h1>{lostItem?.secondayColor}</h1>
        </div>
      </div>
    </div>
  );
};

export default RecentLostItemsCard;
