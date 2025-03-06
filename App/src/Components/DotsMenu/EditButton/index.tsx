import { MdOutlineEdit } from "react-icons/md";
import { FilteredStation } from "../../../Types/FilteresStation";
import { useDispatch } from "react-redux";
import { toggleEditMode } from "../../../Libs/Redux/slices/configsSlice";

export const EditButton = ({station}: {station:FilteredStation})=>{

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(toggleEditMode({
            state:true,
            id_stationEditing: station.stationuuid
        }))
    }

    return(
        <button style={{'--label': "'Editar Nome'"} as React.CSSProperties}
        className="p-2 border-0 option-dotmenu"
        onClick={()=>handleClick()}>
            <MdOutlineEdit className="text-white fs-4"/>
        </button>
    )
}