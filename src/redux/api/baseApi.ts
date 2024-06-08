import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store"
const prodApi = 'https://assign-9-five.vercel.app/api'
const localApi = 'http://localhost:5000/api'

export const baseApi = createApi({
    baseQuery:fetchBaseQuery({baseUrl:`${prodApi}`,credentials:'include',prepareHeaders:(headers,{getState})=>{
      const token = (getState() as RootState).auth.token
       
       
       if(token){
        headers.set('authorization',`${token}`)
       }
       return headers
    }}),
    tagTypes:['Profile','Category','Claims','Users'],
    endpoints:(build)=>({
        userLogin:build.mutation({
            query:(userInfo)=>({
                url:'/login',
                method:'POST',
                body:userInfo
            }),
            invalidatesTags:['Profile']
           
        }),
        userRegistration:build.mutation({
            query:(userInfo)=>({
                url:'/register',
                method:'POST',
                body:userInfo
            })
        }),
        changePassword:build.mutation({
            query:(passwordInfo)=>({
                url:'/change-password',
                method:'PUT',
                body:passwordInfo
            }),
            invalidatesTags:['Profile']
        }),
        myProfile:build.query({
            query:()=>({
                url:'/profile',
                method:'GET',
            }),
            providesTags:['Profile']
        }),
        deactiveUser:build.mutation({
            query:(userInfo)=>({
                url:`/user/deactive/${userInfo.id}`,
                method:"PUT",
                body:userInfo
            }),
            invalidatesTags:['Users']
        }),
        users:build.query({
            query:()=>({
                url:'/users',
                method:'GET',
            }),
            providesTags:['Users']
        }),
        
        updateProfile:build.mutation({
            query:(userInfo)=>({
                url:'/update',
                method:'PUT',
                body:userInfo
            }),
            invalidatesTags:['Profile']
        }),
        categories:build.query({
            query:()=>({
                url:'/found-item-categories',
                method:'GET'
            }),
            providesTags:['Category']
        }),
        createCategory:build.mutation({
            query:(categoryInfo)=>({
                url:'/found-item-categories',
                method:'POST',
                body:categoryInfo
            }),
            invalidatesTags:['Category']
        }),
        createFoundItems:build.mutation({
            query:(foundItemsInfo)=>({
                url:'/found-items',
                method:'POST',
                body:foundItemsInfo
            })
        }),
        foundItems:build.query({
            query:()=>({
                url:'/found-items',
                method:'GET'
            })
        }),
        foundMyItems:build.query({
            query:()=>({
                url:'/me/found-items',
                method:'GET'
            })
        }),
        createLostItems:build.mutation({
            query:(lostItemsInfo)=>({
                url:'/lost-item/create',
                method:'POST',
                body:lostItemsInfo
            })
        }),
        lostItems:build.query({
            query:()=>({
                url:'/lost-items',
                method:'GET',
                
            })
        }),
        myLostItems:build.query({
            query:()=>({
                url:'/me/lost-items',
                method:'GET',
                
            })
        }),
        createClaims:build.mutation({
            query:(claimInfo)=>({
                url:'/claims',
                method:'POST',
                body:claimInfo
            }),
            invalidatesTags:['Claims']
        }),
        allClaims:build.query({
            query:()=>({
                url:'/claims',
                method:'GET'
            }),
            providesTags:['Claims']
        }),
        myClaims:build.query({
            query:()=>({
                url:'/me/claims',
                method:'GET'
            }),
            providesTags:['Claims']
        }),
        
    })
})

export const {useMyProfileQuery,useUserLoginMutation,useUserRegistrationMutation,useCategoriesQuery,useCreateCategoryMutation,useCreateFoundItemsMutation,useFoundItemsQuery,useChangePasswordMutation,useCreateLostItemsMutation,useLostItemsQuery,useCreateClaimsMutation,useAllClaimsQuery,useMyLostItemsQuery,useMyClaimsQuery,useFoundMyItemsQuery,useUpdateProfileMutation,useUsersQuery, useDeactiveUserMutation} = baseApi