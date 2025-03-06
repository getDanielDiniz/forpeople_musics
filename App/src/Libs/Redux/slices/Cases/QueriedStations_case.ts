import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { stationsInicialStateInterface } from "../inicialStates/stationsSlice/interface";
import { fetchQueriedStations } from "../stationsSlice";
import { FilteredStation } from "../../../../Types/FilteresStation";
import { toast } from "react-toastify";


export const QueriedStations_case = (builder:ActionReducerMapBuilder<stationsInicialStateInterface>)=>{
    
    //Processamento
    builder.addCase(fetchQueriedStations.pending, ()=>{})

    //Sucesso
    builder.addCase(fetchQueriedStations.fulfilled, (state,action)=>{

        if(action.payload && action.payload.data.length < 1 && state.list.length < 1){
            toast.info("Não foram encontradas estações com essa descrição")
            return
        } 

        state.list = action.payload?.data as FilteredStation[]
    })

    //Falha
    builder.addCase(fetchQueriedStations.rejected, (state, action)=>{
        console.error(action.error.message)
        toast.error("Error on search stations")
    })
}