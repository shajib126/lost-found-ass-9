import toast from "react-hot-toast";

export const matchPassword = (password:string,confirmPassword:string)=>{
    
    
    if(password !== confirmPassword){
        toast.error('Password does not match')
    }else{
        return true
    }
}