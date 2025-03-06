import { configureStore } from "@reduxjs/toolkit";
import StationsSlice from "./slices/stationsSlice";
import CountriesSlice from "./slices/countriesSlice";
import ConfigsSlice from "./slices/configsSlice";
import ParamsSlice from "./slices/paramsRequestSlice";
import { loadingMiddleware } from "./Middleware/loadingMiddleware";

/**
 * Store Redux, onde os dados são reunidos
 */
export const store = configureStore({
  reducer: {
    stations: StationsSlice,
    countries: CountriesSlice,
    configs: ConfigsSlice,
    params: ParamsSlice,
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(loadingMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
