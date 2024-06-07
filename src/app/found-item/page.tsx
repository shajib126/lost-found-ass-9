'use client'
import { useCategoriesQuery, useCreateFoundItemsMutation } from "@/redux/api/baseApi";
import { MutationError } from "@/utils/MutationError";
import ProtectedRoute from "@/utils/ProtectedRoute";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const page = () => {
const {data} = useCategoriesQuery('')
const [createFoundItems] = useCreateFoundItemsMutation()


  const [selectedFiles,setSelectedFiles] = useState<FileList | null>(null)
  const [uploading,setUploading] = useState(false)
  const [categoryId,setCategoryId] = useState('')
 const [formdata,setFormData] = useState({
    foundItemName:'',
    brand:'',
    primaryColor:'',
    foundDate:'',
    location:'',
    phone:'',
    email:'',
    images:[] as string[]
 })
const router = useRouter()
const pathname = usePathname();


 const handleAddCategory = () => {
  router.push(`/category?returnUrl=${encodeURIComponent(pathname)}`);
};
 
 const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  setSelectedFiles(e.target.files);
};

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formdata,
    [e.target.name]: e.target.value,
  });
};


const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (!selectedFiles) return;
  setUploading(true);

  const imageUploadPromises = Array.from(selectedFiles).map(file => {
    const reader = new FileReader();
    return new Promise<string>((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        try {
          const response = await axios.post('/api/upload', {
            image: (reader.result as string).split(',')[1], // Sending base64 without the prefix
          });

          resolve(response.data.data.url);
          
          
        } catch (error) {
          reject(error);
        }
      };
    });
  });

  try {
    const imageUrls = await Promise.all(imageUploadPromises);
    console.log(imageUrls,formdata);
    
    const foundItemsInfo = {
      ...formdata,
      categoryId,
      images:imageUrls
    }

    
    const res = await createFoundItems(foundItemsInfo)
    const error =  await MutationError(res)
    if(error){
      toast.error(error)
    }else{
      toast.success('Found items created')
      setUploading(false)
    }
    
  } catch (error) {
    console.error('Error uploading images:', error);
    setUploading(false);
  }
};

  return (
    <ProtectedRoute>
      <div className=" p-2">
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mt-8 md:w-[80%] mx-auto">
          <div className=" w-[90%] mx-auto">
            <h1 className=" font-bold text-xl mt-4 mb-4">
              Submit Found Property
            </h1>
          </div>
          <input
            name="foundItemName"
            onChange={handleInputChange}
            className="lost-input"
            type="text"
            placeholder="What was Found"
          />
          <div className="md:w-[50%] md:ml-0 ml-[5%]">
            <label className="" htmlFor="date found">Date of found</label>
            <br />
          <input name="foundDate" onChange={handleInputChange} className="lost-input" type="date" placeholder="Date Found" />
          </div>
          
          <div className="w-[90%] mx-auto flex gap-4">
            <select onChange={(e)=>setCategoryId(e.target.value)} className="border-2 p-2 border-gray-600 rounded-md w-[40%]">
              <option value="">Category</option>
              {data?.data?.map((category:any,i:number)=>(
                <option key={i} value={category.id}>{category?.name}</option>
              ))}
            </select>
            <button onClick={handleAddCategory} className="flex gap-1 items-center bg-gray-400 p-2 rounded-md">
              <MdOutlineCreateNewFolder />Add New
            </button>
          </div>
          
          <input name="brand" onChange={handleInputChange} type="text" placeholder="Brand" className="lost-input"  />
          <input className="lost-input" name="location" onChange={handleInputChange} type="text" placeholder="location" />

          <div className="w-[90%] mx-auto">
            <input
              multiple
              onChange={handleFileChange}
              className="lost-input"
              type="file"
              placeholder="Upload Image"
              accept="/*"
            />
          </div>
          <input
          name="primaryColor"
          onChange={handleInputChange}
            className="lost-input"
            type="text"
            placeholder="Primary Color"
          />
          <input
            name="secondayColor"
            onChange={handleInputChange}
            className="lost-input"
            type="text"
            placeholder="Secondary Item color"
          />
          <div className="w-[99%] mx-auto">
            <h1 className="font-bold text-xl w-[90%] mx-auto mb-4">Contact Information</h1>
            <div className="flex flex-wrap gap-4">
              <input
                className="lost-input"
                type="text"
                placeholder="First Name"
              />
              <input
                className="lost-input"
                type="text"
                placeholder="Last Name"
              />
              <input
                name="phone"
                onChange={handleInputChange}
                className="lost-input"
                type="text"
                placeholder="phone number"
              />
              <input className="lost-input" type="text" placeholder="Email" />
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            <button type="submit" disabled={uploading} className="btn btn-success md:w-[20%] text-xl text-white w-full">
              {uploading ? 'Uploading..' : 'Publish'}
            </button>
          </div>
        </form>
        
        
      </div>
    </ProtectedRoute>
  );
};

export default page;
