import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading:false,
    isAsideMenuOpen:false
}

const configsSlice = createSlice({
    name: "configs",
    initialState,
    reducers:{
        toggleAsideMenu: (state)=>{
            state.isAsideMenuOpen = !state.isAsideMenuOpen
        },
        toggleLoading: (state)=>{
            state.loading = !state.loading
        }
    }
})

export default configsSlice.reducer

//Modificadores de estado
export const {toggleAsideMenu, toggleLoading} = configsSlice.actions

//Leitores de estado
export const AsideMenuState = (state: {configs:any}) => state.configs.isAsideMenuOpen
export const LoadingState = (state: {configs:any}) => state.configs.loading