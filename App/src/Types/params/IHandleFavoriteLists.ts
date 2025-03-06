import { FilteredStation } from "../FilteresStation";


export default interface IHandleFavoriteList {
    favoriteList?: FilteredStation[]
    station: FilteredStation;
    operation: "create" | "update" | "delete";
  }