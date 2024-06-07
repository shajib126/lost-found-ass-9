import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";


export type TAuth = {
    user:null | any
    token:null | string
    profile:null | any
}
const initialState = {
    user:null,
    token:null,
    profile:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const {user,token} = action.payload
            state.user = user;
            state.token = token
        },
        setProfile:(state,action)=>{
            state.profile = action.payload
        },
        logout:(state)=>{
            state.user = null;
            state.token = null;
            state.profile = null;
            
        }
    }

})

export const {setUser,logout,setProfile} = authSlice.actions
export default authSlice.reducer


export const userCurrentToken = (state:RootState) => state.auth.token
export const userCurrentUser = (state:RootState) => state.auth.user