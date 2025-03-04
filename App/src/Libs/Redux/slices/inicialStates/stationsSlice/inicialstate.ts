import { stationsInicialStateInterface } from "./interface";

const favoriteStations = localStorage.getItem("favoriteStations")

export const stationsSlice_initialState:stationsInicialStateInterface = {
    numberOfElements: 10,
    list: [],
    favoriteStations:  favoriteStations? JSON.parse(favoriteStations) : [] ,
    active: null

}