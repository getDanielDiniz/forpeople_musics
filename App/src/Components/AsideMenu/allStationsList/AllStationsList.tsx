import { useSelector } from "react-redux";
import { PlayPauseButton } from "../../PlayPauseButton";
import { ListOfStations } from "../../../Libs/Redux/slices/stationsSlice";
import { AddListButton } from "../AddListButton/AddListButton";
import { FilteredStation } from "../../../Types/FilteresStation";

/**
 *
 * @returns - Lista de estações já com botão de play e botão de adicionar aos favoritos
 */
export const AllStationsList = () => {
  const StationList: FilteredStation[] = useSelector(ListOfStations);

  return (
    <ul className="container-fluid d-flex p-3 flex-column overflow-auto gap-4">
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
