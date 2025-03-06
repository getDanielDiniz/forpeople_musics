import { toast } from "react-toastify";
import { FilteredStation } from "../Types/FilteresStation";
import IHandleFavoriteList from "../Types/params/IHandleFavoriteLists";

/**
 *
 * @param params - Objeto contendo a estação, a operação que deseja fazer, e a lista onde deseja fazer
 * @returns - objeto com a lista atualizada em formato de string
 */
export default function handleFavoriteStationList(
  params: IHandleFavoriteList
): FilteredStation[] | null {
  let newList = [...params.favoriteList || []];

  switch (params.operation) {
    case "create":
      const station = {
        ...params.station,
        isPlaying: false,
      } as FilteredStation;

      newList.push(station);
      break;

    case "update":
      const stationUp = {
        ...params.station,
        isPlaying: false,
      } as FilteredStation;

      newList = newList.map((e)=> e.stationuuid === stationUp.stationuuid ? stationUp : e)

      break;

    case "delete":
      newList = newList.filter(
        (e) => e.stationuuid !== params.station.stationuuid
      );
      break;

    default:
      toast.error("Operation type invalid");
      return null;
  }

  return newList;
}
