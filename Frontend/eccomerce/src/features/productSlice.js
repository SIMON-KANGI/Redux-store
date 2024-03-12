
//create a slice 

import { createSlice } from "@reduxjs/toolkit"
//initialize items
const initialState={
    items:[],
    status:null
}
const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{}
})

export default productSlice.reducer