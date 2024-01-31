import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { messageFetcher } from "@/helper/fetcher";
  
  type InitialStateProp={
    messages:{
        senderId:string,
        text:string
    }[]
  }
  const initialState:InitialStateProp = {
    messages:[]
  }
export const messageSlice = createSlice({
    name:"message",
    initialState,
    reducers:{
        setMessages:(state,action:PayloadAction<InitialStateProp["messages"]>)=>{
            state.messages = [...state.messages, ...action.payload];
        }
    }

})


export const {setMessages} = messageSlice.actions




export default messageSlice.reducer
