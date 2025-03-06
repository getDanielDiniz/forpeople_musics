import { Middleware, PayloadAction } from "@reduxjs/toolkit";
import { fetchQueriedStations, fetchStations } from "../slices/stationsSlice";
import { toggleLoading } from "../slices/configsSlice";

let numberOfChar = 0

export const loadingMiddleware: Middleware =
  (storeAPI) => (next) => (action: any) => {
    const loadingActions = [
      fetchQueriedStations.pending.type,
      fetchStations.pending.type,
    ];

    const state = storeAPI.getState()

    const finalActions = {
      success: [
        fetchQueriedStations.fulfilled.type,
        fetchStations.fulfilled.type,
      ],
      fail: [
         fetchStations.rejected.type,
         fetchQueriedStations.rejected.type
        ],
    };

    //Se o status da req está pendente, loading = true
    if (
      loadingActions.includes(action.type) &&
      action.type !== toggleLoading("").type
    ) {
      storeAPI.dispatch(toggleLoading(true));
    } 
    //Se o status da req foi sucesso, 
    //desativa o loading
    else if (finalActions.success.includes(action.type)) {

        storeAPI.dispatch(toggleLoading(false));
    }

    return next(action);
  };
