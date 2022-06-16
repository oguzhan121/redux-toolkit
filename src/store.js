import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './stores/counter'

export const store = configureStore({
  reducer: {
      counter:counterReducer,
  },
})