import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const getDetail = createAsyncThunk("GET/getdetails", async () => {
    return  axios({
      method: "get",
      url: "http://localhost:5001/comment",
    })
    .then((response) => response.data);

    
  });

  const detailSlice = createSlice({
    name:"post",
    initialState:{
        list: [],
        error: "",
    },
    reducers: {},
    extraReducers: {
        [getDetail.pending]: (state) => {
            state.loading = true;
            state.detailInfo = [];
            state.error = "";
          },
        [getDetail.fulfilled]: (state, action) => {
            console.log(action)
            state.detailInfo = action.payload;
            state.loading = false;
            state.error = "";
          },
        [getDetail.rejected]: (state, action) => {
            state.loading = false;
            state.detailInfo = [];
            state.error = action.payload;
          }
    }
})

export const detailActions = detailSlice.actions
export default detailSlice.reducer