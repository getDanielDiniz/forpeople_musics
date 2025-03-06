import { useSelector } from "react-redux";
import { favoriteStationsList } from "../../Libs/Redux/slices/stationsSlice";
import { PlayPauseButton } from "../PlayPauseButton";
import { DotsMenu } from "../DotsMenu";
import { FilteredStation } from "../../Types/FilteresStation";
import "./StationsList.scss"
import { Content } from "./Content";

/**
 *
 * @returns - Lista de estações já com botão de play e menu lateral
 */
export const StationsList = () => {
  const StationList: FilteredStation[] = useSelector(favoriteStationsList);

  return (
    <ul className="container-md d-flex flex-column stationsList">
      {StationList &&
        StationList.map((station) => {
          return (
            <li
              className="row text-white p-2 d-flex align-items-center"
              key={station.stationuuid}
            >
              <PlayPauseButton className="col-md-1 col-2" station={station} />
              <Content station={station} />
              <DotsMenu station={station} className="col-md-1 col-2" />
            </li>
          );
        })}
    </ul>
  );
};
