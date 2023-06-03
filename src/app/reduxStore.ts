import { AnyAction, configureStore } from '@reduxjs/toolkit'
import { playgroundSlice, playgroundType } from '../features/playground/playgroundSlice'

export const store = configureStore({
  reducer: {
    playground : playgroundSlice.reducer ,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch