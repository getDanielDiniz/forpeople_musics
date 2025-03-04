import { configureStore } from "@reduxjs/toolkit";
import StationSlice from "./slices/stationsSlice";
import CountriesSlice from "./slices/countriesSlice";
import ConfigsSlice from "./slices/configsSlice";

/**
 * Store Redux, onde os dados são reunidos
 */
export const store = configureStore({
  reducer: {
    stations: StationSlice,
    countries: CountriesSlice,
    configs: ConfigsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
