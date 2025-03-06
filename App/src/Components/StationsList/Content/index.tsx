import { useSelector } from "react-redux";
import { EditModeState } from "../../../Libs/Redux/slices/configsSlice";
import { FilteredStation } from "../../../Types/FilteresStation";
import { EditContent } from "./editContentForm";
import "./Content.scss";

export const Content = ({ station }: { station: FilteredStation }) => {
  const isEditModeActive = useSelector(EditModeState);

  if (
    !isEditModeActive.state ||
    isEditModeActive.id_stationEditing !== station.stationuuid
  ) //Informações padrão da estação
    return (
      <div className="col-md-10 col-8 flex-fill d-flex flex-column gap-1 component-content">
        <h5 className="mb-0">{station.name}</h5>
        <div className="d-flex gap-2">
          <span>{station.country ? station.country : station.countrycode}</span>
          <span>{station.state && `- ${station.state}`}</span>
        </div>
        <span>{station.tags && station.tags}</span>
      </div>
    );

    //Ao clicar em editar estação o formulário é renderizado no lugar
  return (
    <EditContent station={station}/>
  );
};
