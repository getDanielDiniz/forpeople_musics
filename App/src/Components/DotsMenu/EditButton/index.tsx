import { MdOutlineEdit } from "react-icons/md";
export const EditButton = ()=>{

    return(
        <button style={{'--label': "'Editar Nome'"} as React.CSSProperties}
        className="p-2 border-0 option-dotmenu">
            <MdOutlineEdit className="text-white fs-4"/>
        </button>
    )
}