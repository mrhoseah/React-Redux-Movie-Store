import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movies/movieSlice'
import userSlice from './users/userSlice'

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    user:userSlice
  }
})
