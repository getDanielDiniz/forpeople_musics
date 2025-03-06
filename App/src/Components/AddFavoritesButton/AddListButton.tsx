import { CiBookmarkPlus } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiBookmarkRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteStationsList,
  updateFavoriteList,
} from "../../Libs/Redux/slices/stationsSlice";
import { useEffect, useState } from "react";
import { FilteredStation } from "../../Types/FilteresStation";
import "./AddListButton.scss";
import IHandleFavoriteList from "../../Types/params/IHandleFavoriteLists";

/**
 * Botão de adicionar uma estação a lista de favoritos.
 *
 * @param className - Classes vindas do elemento pai para ser posicionada dentro do container
 * @param station - Estação ao qual o elemento irá adicionar a lista de favoritos
 */
export const AddListButton = ({
  className,
  station,
}: {
  className: string;
  station: FilteredStation;
}) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(favoriteStationsList);
  const [buttonHovered, setButtonHovered] = useState(false);

  const [alreadyInFavoriteList, setAlreadyInFavoriteList] = useState(false);

  useEffect(()=>{
    if(favoriteList){
      favoriteList.some((e)=>e.stationuuid == station.stationuuid)?
      setAlreadyInFavoriteList(true):
      setAlreadyInFavoriteList(false)
    }
  },[favoriteList])

  /***
   * Filtra as informações importantes de station
   * e atualiza o estado no redux
   */
    function handleClick() {
    const operation = alreadyInFavoriteList? "delete" : "create"
    const payload:IHandleFavoriteList = {
      operation:operation,
      station: station
    }

    dispatch(updateFavoriteList(payload));
  }

  return (
    <button
      onClick={() => handleClick()}
      onMouseOver={() => setButtonHovered(true)}
      onMouseOut={() => setButtonHovered(false)}
      className={`${className} bg-transparent border-0 component-addbutton`}
    >
      {alreadyInFavoriteList ? (
        buttonHovered ? (
          <CiBookmarkRemove className="component-removeButton fs-3" />
        ) : (
          <CiBookmarkCheck className="component-checkButton fs-3" />
        )
      ) : (
        <CiBookmarkPlus className="component-plusButton text-white fs-3" />
      )}
    </button>
  );
};
