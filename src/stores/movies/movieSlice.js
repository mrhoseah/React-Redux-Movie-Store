import { createSlice} from '@reduxjs/toolkit';

const movieSlice =createSlice({
    name:'movies',
    initialState:{
        movies: 70
    },
    reducers:{
        added:state=>{
            state.movies+=1
        },
        sold:state=>{
            state.movies-=1
        },
    },

})
export const {sold,added} = movieSlice.actions
export default movieSlice.reducer