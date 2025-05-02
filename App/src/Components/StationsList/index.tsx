import { useSelector } from "react-redux";
import { favoriteStationsList } from "../../Libs/Redux/slices/stationsSlice";
import { FaMicrophoneSlash } from "react-icons/fa";
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

  if(StationList.length < 1){
    return(
      <div className="container-fluid d-flex flex-column align-items-center overflow-hidden min-vh-100">
        <FaMicrophoneSlash className="mt-5 text-white fs-1"/>
        <span className="text-white mt-2">Oops! Parece que você ainda não adicionou uma estação a sua lista de favoritos.</span>  
      </div>

    )
  }

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
