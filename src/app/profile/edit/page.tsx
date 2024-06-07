'use client'
import { useMyProfileQuery, useUpdateProfileMutation } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";
import { MutationError } from "@/utils/MutationError";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [updateProfile] = useUpdateProfileMutation()
  const { isLoading, data } = useMyProfileQuery("");
  const [uploading,setUploading] = useState(false)
  const [selectedFile,setSelectedFile] = useState<File| null>(null)
  const [update,setUpdate] = useState({
    name:'',
    email:'',
    bio:'',
    image:''
  })

  const router = useRouter()
  useEffect(() => {
    if (data) {
      setUpdate({
        name: data?.data?.name || '',
        email: data?.data?.email || '',
        bio: data?.data?.profile?.bio || '',
        image: data?.data?.profile?.image || ''
      })
    }
  }, [data]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setSelectedFile(file)
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setUpdate({
      ...update,
      [e.target.name]:e.target.value
    })
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;
    setUploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      try {
        const response = await axios.post('/api/upload', {
          image: (reader.result as string).split(',')[1], // Sending base64 without the prefix
        });
        const imageUrl = response?.data?.data?.url
     
        
        const userInfo = {
          ...update,
          image:imageUrl 
        }
        
        
        const res = await updateProfile(userInfo)
        const error = await MutationError(res)
        if(error){
          toast.error(error)
        }else{
          toast.success('Profile updated')
          setUploading(false);
          router.push('/profile')
        }
        // setImageUrl(response.data.data.url);
        
      } catch (error) {
        console.error('Error uploading image:', error);
        setUploading(false);
      }
    };
  };
  
  return  <div className="mt-[10%] h-screen">
  <h1 className="text-center text-xl mb-4 font-bold">Update Profile</h1>
  {isLoading ? <Loading /> :
    <form onSubmit={handleSubmit} className="md:w-[40%] w-[80%] mx-auto">
      <input onChange={handleInputChange} name="name" className="edit-input" type="text" value={update.name} />
      <input onChange={handleInputChange} name="email" className="edit-input" type="text" value={update.email} />
      <input onChange={handleInputChange} name="bio" className="edit-input" type="text" value={update.bio} />
      <div>
        <h1>Change Profile photo</h1>
        <img className="w-[100px] h-[100px]" src={update.image || 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg'} alt="" />
        <input onChange={handleFileChange} className="edit-input" type="file" accept="/*" />
      </div>
      <button disabled={uploading} className="bg-green-500 p-2 rounded-sm shadow-sm shadow-gray-300 text-white">{uploading ? 'Uploading..' : 'Publish'}</button>
    </form>}
</div>
};

export default page;
