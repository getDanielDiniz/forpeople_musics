import { FilteredStation } from "../FilteresStation";


export default interface IHandleFavoriteList {
    station: FilteredStation;
    operation: "create" | "update" | "delete";
  }