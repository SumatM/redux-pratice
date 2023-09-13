import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:'count',
    initialState:0,
    reducers:{
        addCount:(state,action)=>{
          return  state+=action.payload;
        },
        deductCount:(state,action)=>{
          return  state-=action.payload;
        }
    }
})


export const {addCount,deductCount} = counterSlice.actions;
export default counterSlice.reducer;