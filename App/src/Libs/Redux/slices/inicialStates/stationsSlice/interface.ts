import {FilteredStation } from "../../../../../Types/FilteresStation";

export interface stationsInicialStateInterface {
    numberOfElements:number;
    list: FilteredStation[],
    active:FilteredStation | null,
    favoriteStations: FilteredStation[]
}