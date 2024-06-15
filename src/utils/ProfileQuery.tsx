'use client'
import { useMyProfileQuery } from "@/redux/api/baseApi";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useRouter } from "next/navigation";

const ProfileQuery = () => {
  const { data, error, isLoading,refetch  } = useMyProfileQuery("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  useEffect(() => {
    if (data && data.success) {
      setToggle(false); // Reset toggle on data change if needed
    }
  }, [data]);

  useEffect(() => {
    // Refetch profile data on component mount to ensure updated state
    refetch();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!data || !data.success) {
    return <Link className="btn" href="/login">Login</Link>;
  }

  return (
    <div className="">
      <img
        onClick={() => setToggle(!toggle)}
        className="w-[50px] h-[50px] rounded-md cursor-pointer"
        src={data.data.profile.image || "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"}
        alt="Profile"
      />
      {toggle && (
        <div className=" mt-2   shadow-lg rounded-lg py-2">
          <button onClick={handleLogout} className="block px-4 py-2 bg-rose-700 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
            Logout
          </button>
          <Link className="bg-rose-700" href={data.data.role === 'user' ? '/profile' : '/admin'}>
            {data.data.role === 'user' ? 'Profile' : 'Dashboard'}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileQuery;
