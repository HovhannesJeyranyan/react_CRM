import { configureStore } from '@reduxjs/toolkit'
import counterReduser from '../features/counter/counterSlice'
import { baseApi } from '../shared/api/baseApi'

export const store = configureStore({
  reducer: {
    counter: counterReduser,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch