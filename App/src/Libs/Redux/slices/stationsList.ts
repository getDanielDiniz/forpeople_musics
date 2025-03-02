import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetStations from "../../../Services/StationsServices/GET_StationList";
import RadioStation from "../../../Types/Responses/RadioStation/InterfaceRadioStation";
import { toast } from "react-toastify";


interface stationsInicialStateInterface {
    numberOfElements:number;
    list: RadioStation[]
}

const initialState:stationsInicialStateInterface = {
    numberOfElements: 10,
    list: []
}

/**
 * Definição de métodos de alteração do estado
 */
export const StationsSlice = createSlice({
    name: "StationsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(fetchStations.pending, ()=>{
        }),
        builder.addCase(fetchStations.fulfilled, (state, action)=>{
            state.list = action.payload
            toast.success("Suas estações já estão listadas!")
        }),
        builder.addCase(fetchStations.rejected, (state, action)=>{
            toast.error(action.error.message)
        })
    },
})


/**
 * Método assíncrono com thunk
 */
export const fetchStations = createAsyncThunk(
    'stations/fetchStations',
    async () => {
        const stations = await GetStations(10)
        return stations
    },
)



/**
 * Métodos de alteração do estado
 */


/**Métodos de leitura do estado */
export const ListOfStations = (state:{stations : stationsInicialStateInterface}) => state.stations.list
export const numberOfElements = (state:{stations : stationsInicialStateInterface}) => state.stations.numberOfElements

/**
 * Reducer a ser usado na store
 */
export default StationsSlice.reducer