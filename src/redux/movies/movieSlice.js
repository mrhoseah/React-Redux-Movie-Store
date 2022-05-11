import { createSlice} from '@reduxjs/toolkit';

const movieSlice =createSlice({
    name:'movies',
    initialState:{
        movieInfo: {
            quantity: 70
        }
    },
    reducers:{
        added:(state,action)=>{
            state.movieInfo.quantity +=action.payload
        },
        sold:(state,action)=>{
            state.movieInfo.quantity-=action.payload
        },
    },

})
export const {sold,added} = movieSlice.actions
export default movieSlice.reducer