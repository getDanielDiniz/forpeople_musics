import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { stationsInicialStateInterface } from "../inicialStates/stationsSlice/interface";
import { fetchStations } from "../stationsSlice";
import { toast } from "react-toastify";
import { FilteredStation } from "../../../../Types/FilteresStation";

export const AllStations_case = (
  builder: ActionReducerMapBuilder<stationsInicialStateInterface>
) => {

    //Fazendo a requisição
    builder.addCase(fetchStations.pending, () => {
    }),
    
    //Sucesso
    builder.addCase(fetchStations.fulfilled, (state, action) => {
        state.list = action.payload as FilteredStation[];
    }),
    
    //Falha
    builder.addCase(fetchStations.rejected, (state, action) => {
      toast.error(action.error.message);
    });


};
