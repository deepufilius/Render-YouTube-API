import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResult: (state,action)=>{
            state = {...state,...action.payload}
            return state;
        }
    }
})

export const {cacheResult} = searchSlice.actions;

export default searchSlice.reducer;