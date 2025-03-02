import { configureStore } from '@reduxjs/toolkit'
import  StationList  from "./slices/stationsList";

/**
 * Store Redux, onde os dados são reunidos, algo como uma pasta de contextos
 */
export const store = configureStore({
  reducer: {
    stations: StationList
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store