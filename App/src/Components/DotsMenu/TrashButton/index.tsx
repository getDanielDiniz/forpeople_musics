import { GoTrash } from "react-icons/go";
import "../MenuOptionsStylesheet.scss"
import { FilteredStation } from "../../../Types/FilteresStation";
import { favoriteStationsList, updateFavoriteList } from "../../../Libs/Redux/slices/stationsSlice";
import { useDispatch, useSelector } from "react-redux";
import IHandleFavoriteList from "../../../Types/params/IHandleFavoriteLists";

export const TrashButton = ({station}: {station:FilteredStation})=>{

    const favoriteList = useSelector(favoriteStationsList);
    const dispatch = useDispatch()

    function handleClick() {
        const deletedStation:IHandleFavoriteList = {
            operation: "delete",
            station
        } 
        dispatch(updateFavoriteList(deletedStation))
    }

    return(
            <button style={{'--label': "'Remover Favorito'"} as React.CSSProperties}
            className="option-dotmenu p-2 border-0"
            onClick={()=>handleClick()}>
                <GoTrash className="text-white fs-4"/>
            </button>
        )
}