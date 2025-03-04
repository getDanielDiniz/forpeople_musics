import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetStations from "../../../Services/StationsServices/GET_StationList";
import { toast } from "react-toastify";
import { stationsSlice_initialState } from "./inicialStates/stationsSlice/inicialstate";
import { stationsInicialStateInterface } from "./inicialStates/stationsSlice/interface";
import { ActiveStation } from "../../../Types/ActiveStation";
import RadioStation from "../../../Types/Responses/RadioStation/InterfaceRadioStation";


const initialState = stationsSlice_initialState

/**
 * Definição de métodos de alteração do estado
 */
export const StationsSlice = createSlice({
    name: "StationsSlice",
    initialState,
    reducers: {
        playMusic: (state, action) => {
            state.active = action.payload as ActiveStation
        }
    },

    extraReducers: (builder)=> {
        builder.addCase(fetchStations.pending, ()=>{
        }),
        builder.addCase(fetchStations.fulfilled, (state, action)=>{
            state.list = action.payload as RadioStation[]
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
export const {playMusic} = StationsSlice.actions

/**Métodos de leitura do estado */
export const activeStation = (state: {stations : stationsInicialStateInterface})=> state.stations.active
export const ListOfStations = (state:{stations : stationsInicialStateInterface}) => state.stations.list
export const numberOfElements = (state:{stations : stationsInicialStateInterface}) => state.stations.numberOfElements

/**
 * Reducer a ser usado na store
 */
export default StationsSlice.reducer