import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useParams } from "react-router";

export const getReview = createAsyncThunk("GET/getdetails", async () => {
    const { productId } = useParams();
    return  axios({
      method: "get",
      url: "http://13.125.151.93/comment"+productId,
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
        [getReview.pending]: (state) => {
            state.loading = true;
            state.reviewInfo = [];
            state.error = "";
          },
        [getReview.fulfilled]: (state, action) => {
            console.log(action)
            state.reviewInfo = action.payload;
            state.loading = false;
            state.error = "";
          },
        [getReview.rejected]: (state, action) => {
            state.loading = false;
            state.reviewInfo = [];
            state.error = action.payload;
          }
    }
})

export const detailActions = detailSlice.actions
export default detailSlice.reducer