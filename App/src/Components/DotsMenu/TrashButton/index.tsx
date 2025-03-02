import { GoTrash } from "react-icons/go";
import "../MenuOptionsStylesheet.scss"

export const TrashButton = ()=>{

    return(
            <button style={{'--label': "'Remover Favorito'"} as React.CSSProperties}
            className="option-dotmenu p-2 border-0">
                <GoTrash className="text-white fs-4"/>
            </button>
        )
}