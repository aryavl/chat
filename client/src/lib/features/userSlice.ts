import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialStateProp = {
  user: {
    name: string;
    email: string;
    _id: string;
    createdAt: string;
    __v: number;
    updatedAt: string;
  };
  userList: {
    name: string;
    email: string;
    _id: string;
    createdAt: string;
    __v: number;
    updatedAt: string;
  }[];
  selectedUser:{
    name: string;
    email: string;
    _id: string;
    createdAt: string;
    __v: number;
    updatedAt: string;
  }
};

const initialState: InitialStateProp = {
  user: {
    name: " ",
    email: " ",
    __v: 0,
    _id: "",
    updatedAt: "",
    createdAt: "",
  },
  userList: [],
  selectedUser:{
    name: '',
    email: '',
    _id: "",
    createdAt: '',
    __v: 0,
    updatedAt: ''
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<InitialStateProp["user"]>) => {
      state.user = action.payload;
    },
    setUserList:(state, action:PayloadAction<InitialStateProp["userList"]>)=>{
        state.userList = action.payload
    },
    setSelectedUser:(state,action:PayloadAction<InitialStateProp["selectedUser"]>)=>{
        state.selectedUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userListAsync.fulfilled, (state, action: PayloadAction<InitialStateProp["userList"]>) => {
      state.userList = action.payload;
    });
  },
});

export const userListAsync = createAsyncThunk(
  "user/userListAsync",
  async () => {
    const userList = await fetch("http://localhost:3003/login/users");
    const result = await userList.json();
    console.log(result);
    return result;
  }
)as any;

export const { setUser ,setUserList,setSelectedUser} = userSlice.actions;

export default userSlice.reducer;
