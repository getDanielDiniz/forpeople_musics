import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import GetStations from "../../../Services/StationsServices/GET_StationList";
import { toast } from "react-toastify";
import { stationsSlice_initialState } from "./inicialStates/stationsSlice/inicialstate";
import { stationsInicialStateInterface } from "./inicialStates/stationsSlice/interface";
import { FilteredStation } from "../../../Types/FilteresStation";

const initialState = stationsSlice_initialState;

/**
 * Definição de métodos de alteração do estado
 */
export const StationsSlice = createSlice({
  name: "StationsSlice",
  initialState,
  reducers: {
    //Reducer que atualiza a música na storage
    playMusic: (state, action) => {
      state.active = action.payload as FilteredStation;
    },

    /**
     *
     * @param {FilteredStation}action - Estação a adicionar nos favoritos
     */
    updateFavoriteList: (state, action) => {
      const station = {...action.payload, isPlaying : false} as FilteredStation;

      state.favoriteStations.push(station);
      localStorage.setItem(
        "favoriteStations",
        JSON.stringify(state.favoriteStations)
      );

      toast.success("Estação adicionada as favoritas!")
    },
    removeFavoriteStation: (state,action:PayloadAction<string>)=>{
      state.favoriteStations = state.favoriteStations.filter((e)=> e.stationuuid !== action.payload)

      localStorage.setItem(
        "favoriteStations",
        JSON.stringify(state.favoriteStations)
      );
      toast.success("Estação removida das favoritas!")
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchStations.pending, () => {}),
      builder.addCase(fetchStations.fulfilled, (state, action) => {
        state.list = action.payload as FilteredStation[];
      }),
      builder.addCase(fetchStations.rejected, (state, action) => {
        toast.error(action.error.message);
      });
  },
});

/**
 * Método assíncrono com thunk
 */
export const fetchStations = createAsyncThunk(
  "stations/fetchStations",
  async () => {
    const allStations = await GetStations(10, null);

    return allStations.map((element) => {
      if (element) {
        const filteredStation: FilteredStation = {
          stationuuid: element.stationuuid,
          isPlaying: true,
          favicon: element.favicon,
          codec: `audio/${element!.codec.toLowerCase()}`,
          name: element.name!,
          url: element.url,
          country: element.country,
          countrycode: element.countrycode,
          state: element.state,
          tags: element.tags,
        };

        return filteredStation;
      }
    });
  }
);

/**
 * Métodos de alteração do estado
 */
export const { playMusic, updateFavoriteList, removeFavoriteStation } = StationsSlice.actions;

/**Métodos de leitura do estado */
export const favoriteStationsList = (state: {
  stations: stationsInicialStateInterface;
}) => state.stations.favoriteStations;

export const activeStation = (state: {
  stations: stationsInicialStateInterface;
}) => state.stations.active;

export const ListOfStations = (state: {
  stations: stationsInicialStateInterface;
}) => state.stations.list;

export const numberOfElements = (state: {
  stations: stationsInicialStateInterface;
}) => state.stations.numberOfElements;

/**
 * Reducer a ser usado na store
 */
export default StationsSlice.reducer;
