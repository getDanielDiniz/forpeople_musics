import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { stationsInicialStateInterface } from "../inicialStates/stationsSlice/interface";
import { fetchQueriedStations } from "../stationsSlice";
import { FilteredStation } from "../../../../Types/FilteresStation";
import { toast } from "react-toastify";


export const QueriedStations_case = (builder:ActionReducerMapBuilder<stationsInicialStateInterface>)=>{
    
    //Processamento
    builder.addCase(fetchQueriedStations.pending, ()=>{})

    //Sucesso
    builder.addCase(fetchQueriedStations.fulfilled, (state,action: {payload: {
        query: string;
        data: FilteredStation[];
    }})=>{
        state.list = action.payload?.data as FilteredStation[]
    })

    //Falha
    builder.addCase(fetchQueriedStations.rejected, (__)=>{
        toast.error("Error on search stations")
    })
}