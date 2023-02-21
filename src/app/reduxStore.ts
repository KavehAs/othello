import { configureStore } from '@reduxjs/toolkit'
import { playgroundSlice } from '../features/playground/playgroundSlice'

export const store = configureStore({
  reducer: {
    // playground : playgroundSlice ,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch