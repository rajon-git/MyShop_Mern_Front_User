import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const registerUser = createAsyncThunk("auth/register",async (thunkAPI)=>{
    try {
        
    } catch (error) {
        
    }
})

const initialState = {
    user:"",
    isError :false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const authSlice =  createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.message = "success"
        })
        .addCase(registerUser.isError,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
        })
    }
})