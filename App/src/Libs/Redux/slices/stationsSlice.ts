import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetStations from "../../../Services/StationsServices/GET_StationList";
import { toast } from "react-toastify";
import { stationsSlice_initialState } from "./inicialStates/stationsSlice/inicialstate";
import { stationsInicialStateInterface } from "./inicialStates/stationsSlice/interface";
import { FilteredStation } from "../../../Types/FilteresStation";
import GetQueriedStations from "../../../Services/StationsServices/GET_QueriedStations";
import FilterRadioStationInformation from "../../../utils/FilterRadioStationInformation";
import RadioStation from "../../../Types/Responses/RadioStation/InterfaceRadioStation";
import { AllStations_case } from "./Cases/AllStations_case";
import { QueriedStations_case } from "./Cases/QueriedStations_case";
import handleFavoriteStationList from "../../../utils/handleFavoriteList";
import IHandleFavoriteList from "../../../Types/params/IHandleFavoriteLists";

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

    updateFavoriteList: (state, action: {payload : IHandleFavoriteList}) => {
      const param = {...action.payload, favoriteList: state.favoriteStations}
      const newList = handleFavoriteStationList(param);
      if (newList == null){
        toast.error("Error on update favorite list")
        return
      }

      localStorage.setItem("favoriteStations", JSON.stringify(newList));
      state.favoriteStations = newList;
      toast.success("Lista de favoritos atualizada!!");
    },
    removeFavoriteStation: ()=>{}
  },

  extraReducers: (builder) => {
    AllStations_case(builder), QueriedStations_case(builder);
  },
});

/**
 * Métodos assíncrono com thunk
 */
export const fetchStations = createAsyncThunk(
  "stations/fetchStations",
  async (__, { getState }) => {
    const globalState: any = getState();
    const stationsState: stationsInicialStateInterface = globalState.stations;

    if (stationsState.list.length == 0) {
      const allStations = await GetStations(10);
      return FilterRadioStationInformation(allStations);
    }
  }
);

export const fetchQueriedStations = createAsyncThunk(
  "stations/fetchFilteredStations",
  async (query: string, { dispatch, getState }) => {
    //Define número mínimo de letras que precisam ser escritas para pesquisa.
    //Se a query tiver letras insuficientes busca as estações iniciais
    if (query.length <= 2) {
      dispatch(fetchStations);
    }

    const state = getState(); //Importa toda a store.

    const stations: RadioStation[] = await GetQueriedStations(
      query,
      state
    );
    const filteredStations = FilterRadioStationInformation(stations);

    const action = {
      query: query,
      data: filteredStations,
    };

    return action;
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
