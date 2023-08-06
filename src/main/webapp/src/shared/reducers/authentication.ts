import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACTION } from 'next/dist/client/components/app-router-headers';
interface AuthParams{
    email:string,
    password:string
}

export let initialState={
    isAuthenticated: false,
    account:{} as any,
    mydata:'',
}
export const login=createAsyncThunk(
    'authentication/login',
    async (auth:AuthParams) =>{
        return axios.post<any>('api/auth/authenticate', auth)
    } 
  );

  export const read=createAsyncThunk(
    'read',
    async () =>{
        return axios.get<any>('/api/home')
    } 
  );
export const getAccount=createAsyncThunk(
    "getAccount",
    async()=>{
       
    }
)
  
export const authenticationSlice=createSlice({
    name:'authentication',
    initialState:initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(login.fulfilled,(state,action)=>{
            sessionStorage.setItem('token',action.payload.data.token)
            return {
                ...state,
                isAuthenticated:true
            }
            
        })
        .addCase(getAccount.fulfilled,(state,action)=>{
              return {
                ...state,
                isAuthenticated:true
            }
        })
        .addCase(read.fulfilled,(state,action)=>{
        console.log(action.payload.data)
      })
    },
})

export default authenticationSlice.reducer