import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state)=>{
            state.isMenuOpen = false;
        }
    }
})

const {actions,reducer} = appSlice;

export const {toggleMenu,closeMenu} = actions;

export default reducer;