import {configureStore} from "@reduxjs/toolkit"
import cartslice from "./Slice"

export const store=configureStore({
    reducer:{
  cart:cartslice
    }
})

export default store