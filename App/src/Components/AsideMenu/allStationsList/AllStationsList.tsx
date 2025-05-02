import { useSelector } from "react-redux";
import { PiEmptyLight } from "react-icons/pi";
import { PlayPauseButton } from "../../PlayPauseButton";
import { ListOfStations } from "../../../Libs/Redux/slices/stationsSlice";
import { AddListButton } from "../../AddFavoritesButton/AddListButton";
import { FilteredStation } from "../../../Types/FilteresStation";
import "./AllStationsList.scss"

/**
 *
 * @returns - Lista de estações já com botão de play e botão de adicionar aos favoritos
 */
export const AllStationsList = () => {
  const StationList: FilteredStation[] = useSelector(ListOfStations);

  /**
   * @returns - Informação visual sobre a pesquisa não ter achado nenhuma estação
   */
  if(StationList.length < 1){
    return(
      <div className="container-fluid d-flex flex-column align-items-center overflow-hidden min-vh-100">
        <PiEmptyLight className="mt-5 text-white fs-1"/>
        <span className="text-white mt-2">Oops! Parece que não existe nenhuma estação com este nome.</span>  
      </div>
    )
  }


  return (
    <ul className="container-fluid d-flex p-3 flex-column overflow-auto min-vh-100 gap-4 component-allStationsList">
      {StationList &&
        StationList.map((station) => {
          return (
            <li
              className="row text-white p-2 d-flex align-items-center justify-content-between"
              key={station.stationuuid}
            >
              <PlayPauseButton className="col-md-1 col-2 component-playInAside" station={station} />
              <div className="col-md-9 col-7 d-flex flex-column gap-1">
                <h5 className="mb-0 fs-6">{station.name}</h5>
                <div className="d-flex gap-2">
                  <span>
                    {station.country ? station.country : station.countrycode}
                  </span>
                  <span>
                    {station.state && `- ${station.state}`}
                  </span>
                </div>
                <span className="text-wrap">{station.tags && station.tags}</span>
              </div>
              <AddListButton className="col-md-1 col-2 " station={station}/>
            </li>
          );
        })}
    </ul>
  );
};
